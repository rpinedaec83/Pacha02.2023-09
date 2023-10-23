const data = new Database();
$("#frm_validar_imei").submit(function(e){
    e.preventDefault();
    let nro_imei = $("#add_val_imei").val();
    const busqueda = data.buscarByImei(nro_imei);
    if (busqueda == false) { // este imei esta bloqueado
        $("#1r_diagnostico").click()
        Swal.fire({
            icon : "success",
            title : "OK",
            text : "IMEI disponible, registre el diagnostico"
        })
    }else{
        $("#add_val_imei").val("");
        Swal.fire({
            icon : "warning",
            title : "Error",
            text : "Este imei esta bloqueado"
        })
    }
})
function cargar_servicios(){
    let row = data.get_servicios();
    let html = ``;
    if (row.length > 0) {
        
    }else{
        html = `
        <tr>
            <td colspan="7" class="text-center">No se encontraron datos</td>
        </tr>`;
    }
    $("#tbody_servicios").html(html);
}
cargar_servicios()