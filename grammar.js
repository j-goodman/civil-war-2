var commaList = (list) => {
    // example: [apple, plantain, tomato] => 'apple, plantain, and tomato'
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

var capitalize = (word) => {
    // example: 'diogenes' => 'Diogenes'
    return word.charAt(0).toUpperCase() + word.slice(1);
}