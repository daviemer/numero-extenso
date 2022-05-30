
var listaCentena = [ "cem", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"];
var listaUnidade = ["um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove"];
var listaDezena = ["dez", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"];
var listaEntreDezVinte = ["onze", "doze", "treze", "catorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"];

var numero = 11
var ctn;
var dzn;
var uni;

var programa = executaPrograma()

console.log(programa)


function mostraPrograma(c, d, u,textCent, textDzn, textUnd){
  var e = ' e '
  var textoCompleto;

  //centena
  if(c != 0){
    if(c == 1 && (d != 0 || u != 0)){
      textoCompleto = 'cento'
    }else{
      textoCompleto = textCent
    }
  }
  //Dezena
  if(d != 0 && c != 0){
    textoCompleto += e + textDzn
  }
  if(d != 0 && c == 0){
    textoCompleto = textDzn
  }
  //unidade
  if(u != 0 && d!= 1){
    textoCompleto += e + textUnd
  }
  if(u != 0 && d == 0){
    textoCompleto = textUnd
  }

  return textoCompleto;
}

function Unidade(unid) {
  var lista = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  for(var i = 0; i < lista.length; i++){
    if(unid == lista[i]) {
      uni = listaUnidade[i];
    }
  }
  return uni;
}

function Dezena(deze, unid) {
  var lista = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  for(var i = 0; i < lista.length; i++){
    if(deze == lista[i]) {
      dzn = listaDezena[i];
    }
  }
  if(deze == 1 && unid != 0){
    for(var j = 0; j < lista.length; j++){
      if(unid == lista[j]){
        dzn = listaEntreDezVinte[j]
      }
    }
  }
  return dzn;
}



function Centena(cent) {
  var lista = [1, 2, 3, 4, 5, 6, 7, 8, 9]
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
  var dezenaEscrito = Dezena(dezena, unidade)
  var unidadeEscrito = Unidade(unidade)

  var exibirTexto = mostraPrograma(centena, dezena, unidade, centenaEscrito, dezenaEscrito, unidadeEscrito);

  return exibirTexto;
} 
