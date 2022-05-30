//var numero = document.querySelector('#numero');

var listaCentena = [ "cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"];
var listaUnidade = ["um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove"];
var listaDezena = ["dez", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa", "cem"];
var listaEntreDezVinte = ["onze", "doze", "treze", "catorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"];

var numero = 124
var ctn;
var dzn;
var uni;

function verificaTamanho() {
  var centena = Math. trunc(numero/100)

  var dezena = Math. trunc((numero%100)/10)

  var unidade = (numero%100)%10

  Centena(centena)
  Dezena(dezena)
  Unidade(unidade)

}

function Unidade(unid) {
  var lista = [1, 2, 3, 4, 5, 6, 7, 9]
  for(var i = 0; i < lista.length; i++){
    if(unid == lista[i]) {
      uni = listaUnidade[i];
    }
  }
}

function Dezena(deze) {
  var lista = [10, 20, 30, 40, 50, 60, 70, 90]
  for(var i = 0; i < lista.length; i++){
    if(deze >= lista[i] && numero < lista[i + 1]) {
      dzn = listaDezena[i];
    }
  }
}



function Centena(cent) {
  var lista = [100, 200, 300, 400, 500, 600, 700, 900]
    for(var i = 0; i < lista.length; i++){
      if(cent < 100){
        break;
      }
      if(numero >= lista[i] && numero < lista[i + 1]) {
        ctn = listaCentena[i]
      }
    }   
}