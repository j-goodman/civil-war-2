var commaList = (list) => {
  var string;
  string = '';
  list.map((name, index) => {
    if (list.length === 1) {
      string = name;
    } else if (index === list.length - 1) {
      string += list.length === 2 ?
      ' and ' + name :
      ', and ' + name ;
    } else if (index === 0) {
      string += name;
    } else {
      string += ', ' + name;
    }
  });
  return string;
}

