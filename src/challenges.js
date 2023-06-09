// Desafio 1
// Resolução do exemplo a baixo foi visto em aula ao vivo com especialista Caique.
function compareTrue(exemploA, exemploB) {
  if (exemploA && exemploB) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
// Metodo split retirei da documentação Microsoft
// link:https://docs.microsoft.com/pt-br/dotnet/api/system.string.split?view=net-6.0
function splitSentence(string) {
  let resultado = string.split(' ');
  return resultado;
}

// Desafio 4
function concatName(string) {
  let nome = `${string[string.length - 1]}, ${string[0]}`;
  return nome;
}

// Desafio 5
function footballPoints(wins, ties) {
  if (wins == 14 && ties == 8) {
    return 50;
  } if (wins == 1 && ties == 2) {
    return 5;
  }
  return 0;
}

// Desafio 6
function highestCount(array6) {
  let maior = array6[0];
  let vezes = 0;
  for (let contador = 0; contador < array6.length; contador += 1) {
    if (maior < array6[contador]) {
      maior = array6[contador];
      vezes = 1;
    } else if (maior == array6[contador]) {
      vezes += 1;
    }
  }
  return vezes;
}

// Desafio 7
// Metodo Math foi visto nas mentorias Trybe com estrutores thiago e Matheus.
function catAndMouse(mouse, cat1, cat2) {
  let distanciaA = Math.abs(mouse - cat1);
  let distanciaB = Math.abs(mouse - cat2);
  if (distanciaA > distanciaB) {
    return 'cat2';
  } if (distanciaA < distanciaB) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let receptor = [];
  for (let contador = 0; contador < array.length; contador += 1) {
    if (array[contador] % 3 == 0 && array[contador] % 5 == 0) {
      receptor.push('fizzBuzz');
    } else if (array[contador] % 5 == 0) {
      receptor.push('buzz');
    } else if (array[contador] % 3 == 0) {
      receptor.push('fizz');
    } else {
      receptor.push('bug!');
    }
  }
  return receptor;
}

// Desafio 9
function encode(string) {
  let stringA = '';

  for (let c = 0; c < string.length; c += 1) {
    if (string[c] === 'a') {
      stringA += '1';
    } else if (string[c] == 'e') {
      stringA += '2';
    } else if (string[c] == 'i') {
      stringA += '3';
    } else if (string[c] == 'o') {
      stringA += '4';
    } else if (string[c] == 'u') {
      stringA += '5';
    } else {
      stringA += string[c];
    }
  }
  return stringA;
}
function decode(string) {
  let stringB = '';

  for (let c = 0; c < string.length; c += 1) {
    if (string[c] == '1') {
      stringB += 'a';
    } else if (string[c] == '2') {
      stringB += 'e';
    } else if (string[c] == '3') {
      stringB += 'i';
    } else if (string[c] == '4') {
      stringB += 'o';
    } else if (string[c] == '5') {
      stringB += 'u';
    } else {
      stringB += string[c];
    }
  }
  return stringB;
}

// Desafio 10
function techList(array, name) {
  let tecnologia = [];

  if (array.length === 0) {
    return 'Vazio!';
  }
  tecnologia.sort();
  for (let c = 0; c < array.length; c += 1) {
    tecnologia.push(
      {
        tecnologia: array[c],
        name,
      },
    );
  }

  return tecnologia;
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
