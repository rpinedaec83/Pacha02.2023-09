const ServiciosArca =function(){
    let Nombre;
    let Ubicacion;
    let clientes=[];
    function configurar(){
        let titulo = document.getElementById("nombre_de_la_tienda");
        titulo.innerText = Nombre
        let sede = document.getElementById("ubicacion")
        sede.innerText = Ubicacion;
    }
    
    function registro_clientes() {
        let nombre= document.formulario.nombres;
        let apellido=document.formulario.apellidos;
        let dni= document.formulario.dnis;
        let marca_telefono= document.formulario.marcas;
        let imei= document.formulario.imeis;
        if (imei!=="123456789101112131415"){
            let cliente= new clientes(nombre,apellido,dni,marca_telefono,imei)
            return cliente;
        } else{
            console.log("No puedes acceder al servicio")
        } 
    }

    function primera_revision() {
        let revison1= document.primer_diagnostico.diagnostico0;
        let diagnostico1= new diagosntico(revison1);
        return diagnostico1;
    }

    function registro_pagos(){
        let pago= Number(document.paga_cliente.pago_diag);
        let pago_cliente= Number(document.paga_cliente.pago_clien);
        let abono= pago*0.5
        if (pago_cliente >= abono) {
            let pago_realizado= new pagos(pago, pago_cliente);

            return pago_realizado;
        } else {
            console.log("El pago que realizo con es suficiente, no puede acceder al servicio")
        }
    }

    function asignar_tecnicos(){
        let marca_asignada=registro_clientes.marca_telefono;
        let total_apagar_cliente;
        switch (marca_asignada) {
            case marca_asignada=="nokia":
                let tecnico1= prompt ("Digite los costos agregado de la reparacion: ");
                total_apagar_cliente= new tecnicos(tecnico1)+pagos.pago
                return total_apagar_cliente;
                break;
            case marca_asignada=="sangsum":
                let tecnico2= prompt ("Digite los costos agregado de la reparacion: ");
                total_apagar_cliente= new tecnicos(tecnico2)+pagos.pago
                return total_apagar_cliente;
                break;
            case marca_asignada=="apple":
                let tecnico3= prompt ("Digite los costos agregado de la reparacion: ");
                total_apagar_cliente= new tecnicos(tecnico3)+pagos.pago
                return total_apagar_cliente;
                break;
            case marca_asignada=="huewei":
                let tecnico4= prompt ("Digite los costos agregado de la reparacion: ");
                total_apagar_cliente= new tecnicos(tecnico4)+pagos.pago
                return total_apagar_cliente;
                break;
            case marca_asignada=="huewei":
                let tecnico5= prompt ("Digite los costos agregado de la reparacion: ");
                total_apagar_cliente= new tecnicos(tecnico5)+ pagos.pago
                return total_apagar_cliente;
                break;
            default:
                console.log("Tecnico no disponible para la marca "+registro_clientes.marca_telefono)
                break;
        }
    }

    function ver_estado() {
        if (registro_clientes = null) {
            let estado1=document.getElementById("estadotele");
            estado1.innerHTML="Esta registrado"
        } else if (primera_revision.diagnostico1!=null){
            let estado2=document.getElementById("estadotele");
            estado2.innerHTML="Paso por la primera revision"
        } else if (registro_pagos.pago_realizado!=null){
            let estado3=document.getElementById("estadotele");
            estado3.innerHTML="Se realizo su pago"
        } else if (asignar_tecnicos.total_apagar_cliente!= null){
            let estado1=document.getElementById("estadotele");
            estado1.innerHTML="Ya se le asigno un tecnico para su reparacion"
            if (registro_pagos.pago_cliente<= asignar_tecnicos.total_apagar_cliente) {
                let estado1=document.getElementById("estadotele");
                estado1.innerHTML="Realize el pago faltante"
            }
        }
    }


    return {
        init: function (parametros) {
            Nombre = parametros.Nombre;
            Ubicacion=parametros.Ubicacion;
            configurar();
        },
    }}();

class clientes{
    constructor(nombre,apellido,dni,marca_telefono,imei){
        this.nombre=nombre;
        this.apellido=apellido;
        this.dni=dni
        this.marca_telefono=marca_telefono;
        this.imei=imei;
    }
};
class diagosntico{
    constructor(revison1){
        this.revison1=revison1;
    }
}
class pagos{
    constructor(pago,pago_cliente){
        this.pago=pago
        this.pago_cliente=pago_cliente;
    }
};
class tecnicos {
    constructor(tecnico1,tecnico2,tecnico3,tecnico4,tecnico5 ){
        this.tecnico1=tecnico1;
        this.tecnico2=tecnico2;
        this.tecnico3=tecnico3;
        this.tecnico4=tecnico4;
        this.tecnico5=tecnico5;
    }
}
