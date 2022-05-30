//var numero = document.querySelector('#numero');

var listaCentena = [ "cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"];
var listaUnidade = ["um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove"];
var listaDezena = ["dez", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa", "cem"];
var listaEntreDezVinte = ["onze", "doze", "treze", "catorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"];

var numero = 124
var centena;
var dezena;
var unidade;

function verificaTamanho() {
  
}

function Unidade() {
  var lista = [1, 2, 3, 4, 5, 6, 7, 9]
  for(var i = 0; i < lista.length; i++){
    if(numero == lista[i]) {
      unidade = listaUnidade[i];
    }
  }
}

function Dezena() {
  var lista = [10, 20, 30, 40, 50, 60, 70, 90]
  for(var i = 0; i < lista.length; i++){
    if(numero >= lista[i] && numero < lista[i + 1]) {
      dezena = listaDezena[i];
    }
  }
}



function Centena() {
  var lista = [100, 200, 300, 400, 500, 600, 700, 900]
    for(var i = 0; i < lista.length; i++){
      if(numero < 100){
        break;
      }
      if(numero >= lista[i] && numero < lista[i + 1]) {
        centena = listaCentena[i]
      }
    }   
}