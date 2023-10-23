class Database {
    imeisBloqueados = [];
    servicios = [];
    constructor () {
        this.cargarImeiBloqueados();
        this.cargarServicios();
    }
    cargarImeiBloqueados(){
        const arregloDatos = localStorage.getItem("imeis-bloqueados");
        if (arregloDatos) {
            const parseDatos = JSON.parse(arregloDatos);
            this.imeisBloqueados = parseDatos;
        }
    }
    cargarServicios(){
        const arrServicios = localStorage.getItem("servicios");
        if (arrServicios) {
            const parseServicios = JSON.parse(arrServicios)
            this.servicios = parseServicios;
        }
    }
    agregarImeiBloqueado(imei,operador,motivo){
        const busqueda = this.buscarByImei(imei)
        if (busqueda == false) {
            this.imeisBloqueados.push({
                operador : operador,
                imei : imei,
                motivo : motivo
            })
            const nueva_data = JSON.stringify(this.imeisBloqueados); 
            localStorage.setItem("imeis-bloqueados",nueva_data);
            return {
                state:200,
                message:"IMEI agregado correctamente"
            };
        }
        return {
            state : 200,
            message : "IMEI existente",
            content : busqueda
        };
    }
    get_celulares_bloqueados(){
        return this.imeisBloqueados;
    }
    buscarByImei(codigo){
        if ( this.imeisBloqueados !== null) {
            const dataSearch = this.imeisBloqueados.filter((item) => item.imei == codigo)
            if (dataSearch) {
                return dataSearch;
            }
        }
        return false;
    }
    buscarImei(codigo){
        if (this.imeisBloqueados.length > 0) {
            const dataSearch = this.imeisBloqueados.filter((item) => item.imei.includes(codigo))
            if (dataSearch) {
                return dataSearch;
            }
        }
        return false;
    }
}