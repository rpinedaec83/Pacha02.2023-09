const DOM = function(){
    let Nombre;
    function configurar() {
        let titulo= document.getElementById("titulo")
        titulo.innerText=Nombre;
        let titulo1=document.getElementById("titulo1")
        titulo1.innerText="Servicios tecnicos";
    }
    function eventos() {
        
    }

    return {
        init: function (parametros) {
            Nombre=parametros.Nombre;
            configurar();
        }
    }

}();
