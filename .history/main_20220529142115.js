//var numero = document.querySelector('#numero');

var listaCentena = [ "cem", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"];
var listaUnidade = ["um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove"];
var listaDezena = ["dez", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"];
var listaEntreDezVinte = ["onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"];

var numero = 124
var centena;
var dezena;
var unidade;

function verificaTamanho(numero) {
  
}

function Dezena() {

}

function Unidade() {

}

function Centena(numero) {
  var lista = [100, 200, 300, 400, 500, 600, 700, 900]
    for(i = 0; i < lista.length; i++){
      if(numero >= lista[i] && numero < lista[i + 1]) {
        centena = listaCentena[i]
      }
    }   
}