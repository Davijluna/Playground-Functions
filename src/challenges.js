// Desafio 1
function compareTrue(exemploA , exemploB) {
  if(exemploA && exemploB == true){
  return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base , height) {
  let area = (base *height)/2;
  return area;
  
}

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName(string) {
  return string[string.length -1] +  ","+ string[0];
}

// Desafio 5
function footballPoints(wins , ties) {

}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse( mouse, cat1 , cat2) {
  let distanciaA= Math.abs(mouse - cat1);
  let distanciaB= Math.abs(mouse - cat2);
  if (distanciaA > distanciaB){

  }
}



// Desafio 8
function fizzBuzz(array) {
let  receptor = [];
  for(let contador = 0; contador < array.length; contador +=1){
      if(array[contador] % 3  == 0 && array[contador]% 5 == 0){
         receptor.push('fizzBuzz');
      }
    else if(array[contador]%5 == 0){
       receptor.push('buzz');
    }
    else if(array[contador]%3 == 0){
     receptor.push('fizz');
    }else{
     receptor.push('bug!');
    }
    }
    return receptor;
    }
    

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};