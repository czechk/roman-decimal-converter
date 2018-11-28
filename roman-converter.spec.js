const converter = require('./roman-converter.js');

test('decimal to roman', () => {
  expect(converter.decimalToRoman(1)).toBe('I');
  expect(converter.decimalToRoman(2)).toBe('II');
  expect(converter.decimalToRoman(3)).toBe('III');
  expect(converter.decimalToRoman(4)).toBe('IV');
  expect(converter.decimalToRoman(5)).toBe('V');
  expect(converter.decimalToRoman(6)).toBe('VI');
  expect(converter.decimalToRoman(7)).toBe('VII');
  expect(converter.decimalToRoman(8)).toBe('VIII');
  expect(converter.decimalToRoman(9)).toBe('IX');
  expect(converter.decimalToRoman(10)).toBe('X');
  expect(converter.decimalToRoman(50)).toBe('L');
  expect(converter.decimalToRoman(100)).toBe('C');
  expect(converter.decimalToRoman(500)).toBe('D');
  expect(converter.decimalToRoman(1000)).toBe('M');
  expect(converter.decimalToRoman(151)).toBe('CLI');
  expect(converter.decimalToRoman(251)).toBe('CCLI');
  expect(converter.decimalToRoman(10221)).toBe('MMMMMMMMMMCCXXI');
});

test('roman to decimal', () => {
  expect(converter.romanToDecimal('I')).toBe(1);
  expect(converter.romanToDecimal('II')).toBe(2);
  expect(converter.romanToDecimal('III')).toBe(3);
  expect(converter.romanToDecimal('IV')).toBe(4);
  expect(converter.romanToDecimal('V')).toBe(5);
  expect(converter.romanToDecimal('VI')).toBe(6);
  expect(converter.romanToDecimal('VII')).toBe(7);
  expect(converter.romanToDecimal('VIII')).toBe(8);
  expect(converter.romanToDecimal('IX')).toBe(9);
  expect(converter.romanToDecimal('X')).toBe(10);
  expect(converter.romanToDecimal('L')).toBe(50);
  expect(converter.romanToDecimal('C')).toBe(100);
  expect(converter.romanToDecimal('D')).toBe(500);
  expect(converter.romanToDecimal('M')).toBe(1000);
  expect(converter.romanToDecimal('CLI')).toBe(151);
  expect(converter.romanToDecimal('CCLI')).toBe(251);
  expect(converter.romanToDecimal('MMMMMMMMMMCCXXI')).toBe(10221);
});
