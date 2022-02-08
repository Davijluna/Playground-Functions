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
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints(wins , ties) {

}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(num) {
  let num =[2, 15, 7, 9 , 45];
  for(contador =0; contador < num.length; contador+=1){
    if(num[contador] % 3 === 0)
      return 'Fizz';
  if (num[contador] % 5 === 0)
    return 'Buzz';
  if(num[contador]% 3 === 0 && num[contador] % 5 ===0)
    return 'test';
    
  
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
