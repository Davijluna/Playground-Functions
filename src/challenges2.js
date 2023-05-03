// Desafio 11
function generatePhoneNumber(array) {
  let numberPhone ='';

  if(array.length != 11){
    return "Array com tamanho incorreto.";
  }else{
    for(index=0;index < 14;index +=1){
      if(array[index] == array[0]){
        numberPhone[index] = '(';

      }else if(array[index] == array[1]){
        numberPhone[index] = array[0]

      }else if(array[index] == array[2]){
        numberPhone[index] = array[1];

      }else if(array[index] == array[3]){
        numberPhone[index] = ')';

      }else if(array[index]== array[4]){
        numberPhone[index] = array[2];

      }else if(array[index] == array[5]){
        numberPhone[index] = array[3];

      }else if(array[index] == array[6]){
        numberPhone[index] = array[4];

      }else if(array[index] == array[7]){
        numberPhone[index] = array[5];

      }else if(array[index] == array[8]){
        numberPhone[index] = array[6];

      }else if(array[index] == array[9]){
        numberPhone[index] = "-"

      }else if(array[index] == array[10]){
        numberPhone[index] = array[7];

      }else if(array[index] == array[11]){
        numberPhone[index] = array[8];

      }else if(array[index] == array[12]){
        numberPhone[index] = array[9];

      }else if(array[index] == array[13]){
        numberPhone[index] = array[10];

      }

    }
  }
  
    return numberPhone;
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
  for 

}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
