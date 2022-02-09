// Desafio 11
function generatePhoneNumber(array) {

  if(array.length > 11){
    return "Array com tamanho incorreto."
  }else if()
}

// Desafio 12
function triangleCheck(lineA ,lineB ,lineC) {
  if(lineA >= lineB+lineC){
  return false;
  }else if(lineB >= lineA+lineC){
    return false;
  }else if(lineC >=lineA+lineB){
    return false
  }else{
    return true;
  }
   }

// Desafio 13
function hydrate(string) {

}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
