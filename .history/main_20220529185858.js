
var listaCentena = [ "cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"];
var listaUnidade = ["um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove"];
var listaDezena = ["dez", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa", "cem"];
var listaEntreDezVinte = ["onze", "doze", "treze", "catorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"];

var numero = 124
var ctn;
var dzn;
var uni;

var programa = executaPrograma()

console.log(programa)


function mostraPrograma(c, d, u,textCent, textDzn, textUnd){
  var e = ' e '
  var textoCompleto;

  if(c != 0){
    if(c == 1 && (d != 0|| u != 0) ){
      textoCompleto = 
    }
  }else{
    textoCompleto = textCent + e
  }
  if(d != 0){
    textoCompleto += textDzn
  }
  if(u != 0){
    textoCompleto += e + textUnd
  }
  
  return textoCompleto;
}

function Unidade(unid) {
  var lista = [1, 2, 3, 4, 5, 6, 7, 9]
  for(var i = 0; i < lista.length; i++){
    if(unid == lista[i]) {
      uni = listaUnidade[i];
    }
  }
  return uni;
}

function Dezena(deze) {
  var lista = [1, 2, 3, 4, 5, 6, 7, 9]
  for(var i = 0; i < lista.length; i++){
    if(deze == lista[i]) {
      dzn = listaDezena[i];
    }
  }
  return dzn;
}



function Centena(cent) {
  var lista = [1, 2, 3, 4, 5, 6, 7, 9]
    for(var i = 0; i < lista.length; i++){
      if(cent == lista[i]) {
        ctn = listaCentena[i]
      }
    }
  return ctn;   
}

function executaPrograma() {
  var centena = Math. trunc(numero/100)

  var dezena = Math. trunc((numero%100)/10)

  var unidade = (numero%100)%10

  var centenaEscrito = Centena(centena)
  var dezenaEscrito = Dezena(dezena)
  var unidadeEscrito = Unidade(unidade)

  var exibirTexto = mostraPrograma(centena, dezena, unidade, centenaEscrito, dezenaEscrito, unidadeEscrito);

  return exibirTexto;
} 

