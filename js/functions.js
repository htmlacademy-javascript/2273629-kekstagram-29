function stringLenght (string, length) {
  return (string.length <= length);
}

console.log(stringLenght('проверяемая строка', 20));

function isPalindrom (stroke) {
  stroke = stroke.replaceAll(' ', '');
  stroke = stroke.toLowerCase();
  let editStroke = stroke;
  console.log(editStroke);
  let newStroke = '';

  for (let i = editStroke.length - 1; i >= 0; i -= 1 ) {
    newStroke += editStroke[i];
  }


  return editStroke === newStroke;
}

console.log(isPalindrom('Лёша на полке клопа не нашёл'));
