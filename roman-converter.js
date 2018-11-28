const mappingToRoman = (number) => {
  switch (number) {
  case 1: return 'I';
  case 2: return 'II';
  case 3: return 'III';
  case 4: return 'IV';
  case 5: return 'V';
  case 6: return 'VI';
  case 7: return 'VII';
  case 8: return 'VIII';
  case 9: return 'IX';
  case 10: return 'X';
  case 50: return 'L';
  case 100: return 'C';
  case 500: return 'D';
  case 1000: return 'M';
  default: return 0;
  }
}

const mappingToDecimal = (sign) => {
  switch (sign) {
  case 'I': return 1;
  case 'IV': return 4;
  case 'V': return 5;
  case 'IX': return 9;
  case 'X': return 10;
  case 'L': return 50;
  case 'C': return 100;
  case 'D': return 500;
  case 'M': return 1000;
  default: return 0;
  }
}

const maxDevider = (input) => {
  let dev = 1;
  while (Math.floor(input / 10) !== 0) {
    input = Math.floor(input / 10);
    dev *= 10;
  }
  return dev;
}

const decomposeToArrayOfNumbers = (input) => {
  let number = input;
  let devider = maxDevider(number);
  let numbers = [];
  while (number !== 0) {
    let base = Math.floor(number / devider) * devider;
    number %= devider;
    devider = maxDevider(number);
    numbers.push(base);
  }
  return numbers;
}

const buildRomanNumber = (input) => {
  return input.reduce((a, number) => {
    const mapped = mappingToRoman(number);
    if (mapped) return a + mapped;
    else {
      let dev = maxDevider(number);
      if (dev > 1000) dev = 1000;
      const mappedDev = mappingToRoman(dev);
      let multiplier = Math.floor(number / dev);
      return a + mappedDev.repeat(multiplier);
    }
  }, '');
}

const decimalToRoman = (input) => {
  return buildRomanNumber(decomposeToArrayOfNumbers(input));
}

module.exports.decimalToRoman = decimalToRoman;

const romanToDecimal = (input) => {
  let number = 0;
  let index = 0;
  while (index < input.length) {
    if (input[index] === 'I' && (input[index + 1] === 'V' || input[index + 1] === 'X')) {
      const sign = input[index] + input[index + 1];
      index += 2;
      const mapped = mappingToDecimal(sign);
      number += mapped;
      continue;
    }
    number += mappingToDecimal(input[index]);
    index++;
  }
  return number;
}

module.exports.romanToDecimal = romanToDecimal;
