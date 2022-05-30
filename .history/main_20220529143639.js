//var numero = document.querySelector('#numero');

var listaCentena = [ "cem", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"];
var listaUnidade = ["um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove"];
var listaDezena = ["dez", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"];
var listaEntreDezVinte = ["onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"];

var numero = 124
var centena = new Map();
var dezena = new Map();
var unidade = new Map();

function verificaTamanho() {
  
}

function Dezena() {
  var lista = [10, 20, 30, 40, 50, 60, 70, 90]
  for(var i = 0; i < lista.length; i++){
    dezena.set(listaDezena[i], lista[i]);
  }
}

function Unidade() {
  var lista = [1, 2, 3, 4, 5, 6, 7, 9]
  for(var i = 0; i < lista.length; i++){
    unidade.set(listaUnidade[i], lista[i]);
  }
}

function Centena() {
  var lista = [100, 200, 300, 400, 500, 600, 700, 900]
    for(var i = 0; i < lista.length; i++){
      centena.set(listaCentena[i], lista[i]);
    }   
}