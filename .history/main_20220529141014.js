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

function Milhar(numero) {
  switch(numero){
    case numero >= 100 && numero < 200: centena = listaCentena[0]
    break;
    case numero >= 200 && numero < 300: centena = listaCentena[1]
    break;
    case numero >= 300 && numero < 400: centena = listaCentena[2]
    break;
    case numero >= 400 && numero < 500: centena = listaCentena[3]
    break;
    case numero >= 500 && numero < 600: centena = listaCentena[4]
    break;
    case numero >= 600 && numero < 700: centena = listaCentena[5]
    break;
    case numero >= 700 && numero < 800: centena = listaCentena[6]
    break;
    case numero >= 800 && numero < 900: centena = listaCentena[7]
    break;
    case numero >= 900 && numero < 1000: centena = listaCentena[8]
    break;
  } 
}