function checkStringLength (string, symbols) {
  return string.length <= symbols;
}


checkStringLength ('проверяемая строка', 20);
checkStringLength ('проверяемая строка', 18);
checkStringLength ('проверяемая строка', 10);

function checkPalindrome (newString) {
  const string = newString.replaceAll(' ','').toLowerCase();
  for (let i = 0; i < string.length / 2; i++) {
    if (string.at(i) !== string.at(-i - 1)) { // string.at(i) === string[i]
      return false;
    }
  }
  return true;
}

checkPalindrome('Лёша на полке клопа нашёл ');
checkPalindrome('  Искать Такси');

function getNumberFromString (stringWithNumbers) {
  const string = stringWithNumbers.toString();
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string[i], 10))) { // string[i] === string.at(i)
      result += string[i];
    }
  }
  return parseInt(result, 10);
}

getNumberFromString('2023 год');
getNumberFromString('ECMAScript 2022');
getNumberFromString('1 кефир, 0.5 батона');
getNumberFromString('агент 007');
getNumberFromString('а я томат');
