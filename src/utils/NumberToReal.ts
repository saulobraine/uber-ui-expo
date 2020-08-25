export const NumberToReal = (number: Number) => {
  let newNumber = number.toFixed(2).split('.');
  newNumber[0] = "R$ " + newNumber[0].split(/(?=(?:...)*$)/).join('.');

  return newNumber.join(',');
}