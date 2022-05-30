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
  switch(numero){
    case numero >= 100 && numero < 1000: centena = listaCentena[0]
    case numero >= 200 && numero < 1000: centena = listaCentena[1]
    case numero >= 300 && numero < 1000: centena = listaCentena[2]
    case numero >= 400 && numero < 1000: centena = listaCentena[3]
    case numero >= 500 && numero < 1000: centena = listaCentena[4]
    case numero >= 600 && numero < 1000: centena = listaCentena[5]
    case numero >= 700 && numero < 1000: centena = listaCentena[6]
    case numero >= 800 && numero < 1000: centena = listaCentena[7]
    case numero >= 900 && numero < 1000: centena = listaCentena[8]
  } 
}

function dezena() {

}

function unidade() {

}

function milhar() {

}