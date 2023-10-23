class Database {
    imeisBloqueados = [];
    reparaciones = [];
    pagos = [];
    tecnicos = [];
    constructor () {
        this.cargarImeiBloqueados();
        this.cargarServicios();
        this.cargarTecnicos();
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
            this.reparaciones = parseServicios;
        }
    }
    cargarTecnicos(){
        const arrTecnicos = localStorage.getItem("tecnicos");
        if (arrTecnicos) {
            const parseTecnicos = JSON.parse(arrTecnicos)
            this.tecnicos = parseTecnicos;
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
    agregarTecnico(nombres,apellidos,dni,skills){
        const busqueda = this.buscarTecnicoByDni(dni)
        if (busqueda == false) {
            this.tecnicos.push({
                nombre : nombres,
                apellido : apellidos,
                dni : dni,
                skills : skills
            })
            const nueva_data = JSON.stringify(this.tecnicos); 
            localStorage.setItem("tecnicos",nueva_data);
            return {
                state:200,
                message:"Tecnico agregado correctamente"
            };
        }
        return {
            state : 200,
            message : "Técnico existente",
            content : busqueda
        };
    }
    get_celulares_bloqueados(){
        return this.imeisBloqueados;
    }
    get_servicios(){
        return this.reparaciones;
    }
    get_tecnicos(){
        return this.tecnicos;
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
    buscarTecnicoByDni(dni){
        if ( this.tecnicos !== null) {
            const dataSearch = this.tecnicos.filter((item) => item.dni == dni)
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