/////model////
const HorasTrabalhadas = {
    getCalculoHoraParaValor(HoraInicio, MinutoInicio, HoraFim, MinutoFim){
        return ((HoraFim - HoraInicio) + ( ((MinutoFim - MinutoInicio)/60)* -1)) * 6;        
    }
}
//////view/////
const AlteraValoresHtml = {
    insereDadosLista(HoraInicio, MinutoInicio, HoraFim, MinutoFim){
        var secao = document.getElementById("lista");
        var novaSecao = document.createElement('div');
        novaSecao.innerHTML = "Hora Inicio " + HoraInicio + ":" + MinutoInicio + " Hora Final " + HoraFim + ":" + MinutoFim;
        secao.appendChild(novaSecao);       
    },
    atualizaSaldo(){
        var LabelSaldo = document.getElementById("valorSaldo");
        LabelSaldo.innerHTML = saldo;
    },
    limpaCampos(){
        document.getElementById('HoraInicio').value = "";
        document.getElementById('MinutoInicio').value = "";
        document.getElementById('HoraFim').value = "";
        document.getElementById('MinutoFim').value = "";
    }
}
////controller
var saldo = 0;
function AdicionaCalculaHoras(){
    var HoraInicio = document.getElementById('HoraInicio').value;
    var MinutoInicio = document.getElementById('MinutoInicio').value;
    var HoraFim = document.getElementById('HoraFim').value;
    var MinutoFim = document.getElementById('MinutoFim').value;
    saldo += HorasTrabalhadas.getCalculoHoraParaValor(HoraInicio, MinutoInicio, HoraFim, MinutoFim);
    AlteraValoresHtml.insereDadosLista(HoraInicio, MinutoInicio, HoraFim, MinutoFim);
    AlteraValoresHtml.atualizaSaldo();
    AlteraValoresHtml.limpaCampos();
}