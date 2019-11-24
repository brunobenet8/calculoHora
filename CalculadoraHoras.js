/////model////
const HorasTrabalhadas = {
    getCalculoHoraParaValor(HoraInicio, MinutoInicio, HoraFim, MinutoFim){ 
        if(HoraFim == HoraInicio){
            if(MinutoInicio <= MinutoFim){
                return ((HoraFim - HoraInicio) + (((MinutoFim - MinutoInicio)/60))) * 6;            
            }else{  
                return ((HoraFim - HoraInicio) + (((MinutoFim - MinutoInicio)/60))) * 6;            
            }
        }else{
            if(MinutoInicio <= MinutoFim){
                return ((HoraFim - HoraInicio) + (((MinutoFim - MinutoInicio)/60))) * 6;            
            }else{   
                return ((HoraFim - HoraInicio) + (((MinutoFim - MinutoInicio)/60))) * 6;            
            }
        }
    }
}
//////view/////
const AlteraValoresHtml = {
    insereDadosLista(HoraInicio, MinutoInicio, HoraFim, MinutoFim){
        var secao = document.getElementById("lista");
        var novaSecao = document.createElement('div');
        novaSecao.setAttribute('class', 'section');
        novaSecao.innerHTML = "<strong>Inicio: </strong> " + HoraInicio + ":" + MinutoInicio + " <strong>Final: </strong> " + HoraFim + ":" + MinutoFim + " <Strong>Valor: </strong>"+ SaldoUltimaHora;
        secao.appendChild(novaSecao);       
    },
    atualizaSaldo(){
        var LabelSaldo = document.getElementById("valorSaldo");
        LabelSaldo.innerHTML = saldo;

        var LabelTotaldeHoras = document.getElementById("TotaldeHoras");
        LabelTotaldeHoras.innerHTML = TotaldeHoras;
    },
    limpaCampos(){
        document.getElementById('HoraInicio').value = "";
        document.getElementById('MinutoInicio').value = "";
        document.getElementById('HoraFim').value = "";
        document.getElementById('MinutoFim').value = "";
    }
}
////controller/////
var saldo = 0;
var SaldoUltimaHora = 0;
var TotaldeHoras = 0;

function AdicionaCalculaHoras(){
    var HoraInicio = document.getElementById('HoraInicio').value;
    var MinutoInicio = document.getElementById('MinutoInicio').value;
    var HoraFim = document.getElementById('HoraFim').value;
    var MinutoFim = document.getElementById('MinutoFim').value;

    var getCalculoHoraParaValor = HorasTrabalhadas.getCalculoHoraParaValor(HoraInicio, MinutoInicio, HoraFim, MinutoFim);
    
    saldo += getCalculoHoraParaValor;
    SaldoUltimaHora = parseFloat((getCalculoHoraParaValor).toFixed(2));
    TotaldeHoras = parseInt(saldo/6) + (((saldo/6) - parseInt(saldo/6))*0.6);

    AlteraValoresHtml.insereDadosLista(HoraInicio, MinutoInicio, HoraFim, MinutoFim);
    AlteraValoresHtml.atualizaSaldo();
    AlteraValoresHtml.limpaCampos();
}
