String.prototype.code = function () {
	return this.charCodeAt('0');
}

String.prototype.map = function (funct, index) {
  var i;
  for (i=0; i<this.length ; i++) {
    funct(this[i], i);
  }
}

var Cell = function () {
	this.letters = {};
}

var Letter = function (char, weight) {
	this.char = char;
	this.weight = weight;
}

var CharMemory = function (char, magnitude) {
  this.char = char;
  this.next = [];
  var i;
  for (i=0; i<magnitude; i++) {
    this.next.push(new Cell ());
  }
}

var Talker = function (magnitude) {
  this.magnitude = magnitude;
  this.memory = {};
};

Talker.prototype.read = function (string) {
  string.map((char, index) => {
    var charMemory;
    var i;
    if (this.memory[char.code()]) {
      charMemory = this.memory[char.code()];
    } else {
      charMemory = new CharMemory (char.code(), this.magnitude);
      this.memory[char.code()] = charMemory;
    }
    for (i=1 ; i<this.magnitude ; i++) {
      if (string[i + index]) {
        if (charMemory.next[i].letters[string[i + index].code()]) {
          charMemory.next[i].letters[string[i + index].code()] += Math.pow(this.magnitude - i, 4);
        } else {
          charMemory.next[i].letters[string[i + index].code()] = Math.pow(this.magnitude - i, 4);
        }
      }
    }
  });
};

Talker.prototype.write = function (base) {
  var sentence = [];
  var string = '';
  if (!base) {
		return false;
	};
  base.map(() => {
    sentence.push(new Cell ());
  });
  string = base[0];

  sentence.map((cell, index) => {
    this.memory[string[index].code()].next.map((nextCell, nextIndex) => {
      if (index + nextIndex < sentence.length) {
        sentence[index + nextIndex].letters = Object.assign(sentence[index + nextIndex].letters, nextCell.letters);
      }
    });
    if (string.length < sentence.length) {
			Math.floor(Math.random() * 1.5) ?
			string += String.fromCharCode(this.chooseCharDeterm(sentence[string.length])):
      string += String.fromCharCode(this.chooseCharRand(sentence[string.length]));
    }
  });
  return string;
}

Talker.prototype.chooseCharRand = function (cell) {
  var allChoices;
  var choiceList = {};
  var choiceInd;
  var total = 0;
  allChoices = Object.keys(cell.letters);
  allChoices.map((letter) => {
    choiceList[total] = letter;
    total += cell.letters[letter];
  });
  choiceInd = Math.floor(Math.random() * total);
  while (!choiceList[choiceInd]) {
    choiceInd -= 1;
  }
  return choiceList[choiceInd];
}

Talker.prototype.chooseCharDeterm = function (cell) {
  var allChoices;
  var choiceWeight = 0;
  var validChoices;
  allChoices = Object.keys(cell.letters);
  allChoices.map((letter) => {
    if (cell.letters[letter] > choiceWeight) {
      validChoices = [letter]; choiceWeight = cell.letters[letter];
    } else if (cell.letters[letter] === choiceWeight) {
      validChoices.push(letter);
    }
  });
  return(validChoices[Math.floor(Math.random() * validChoices.length)]);
}

Talker.prototype.resetMemory  = function () {
    this.memory = {};
}

var namer = new Talker (3);

var generateName = (person) => {
    var firstNames = [];
    var names = [];
		var name;
		var language;
		var secondLanguage;
    namer.resetMemory();
		language = person.languageList()[Math.floor(Math.random() * person.languageList().length)];
		secondLanguage = person.languageList()[Math.floor(Math.random() * person.languageList().length)];
    namesByLanguage[secondLanguage].map((name) => {
        firstNames.push(name.split(' ')[0]);
    });
    namesByLanguage[language].map((name) => {
        firstNames.push(name.split(' ')[0]);
        names.push(name.split(' ')[0]);
        namer.read(name.split(' ')[0]);
				if (name.split(' ').length > 1) {
						names.push(name.split(' ').slice(1, name.split(' ').length).join(''));
						namer.read(name.split(' ').slice(1, name.split(' ').length).join(''));
				}
    });
		name = firstNames[Math.floor(Math.random() * firstNames.length)] +
    ' ' + namer.write(names[Math.floor(Math.random() * names.length)]);
		nameRules.map(method => {
				name = method(name);
		});
		// console.log(':', name);
    return name;
}

String.prototype.insert = function (character, index) {
		return this.slice(0, index) + character + this.slice(index, this.length);
}

String.prototype.insertReplace = function (character, index) {
		return this.slice(0, index) + character + this.slice(index + 1, this.length);
}

String.prototype.isUpperCase = function () {
		return this[0] !== this[0].toLowerCase();
}

// Naming Rules:
var vowels = ['a', 'e', 'i', 'o', 'u'];

var normalCapitalization = name => {
		// Jean DenserPae => Jean Denserpae
		// Inez San tandre => Inez San Tandre
		var returns;
		returns = name;
		name.map((char, index) => {
				if (char.isUpperCase() && (!['-', ' ', '.', '\''].includes(name[index - 1]) && index !== 0)) {
						returns = name.insertReplace(char.toLowerCase(), index);
						console.log('NORMAL CAPITALIZATION', name, '=>', returns);
						name = returns;
				} else if (!char.isUpperCase() && (['-', ' ', '.'].includes(name[index - 1]) || index === 0)) {
						returns = name.insertReplace(char.toUpperCase(), index);
						console.log('NORMAL UNCAPITALIZATION', name, '=>', returns);
						name = returns;
				}
		});
		return returns;
}

var noTriples = name => {
		// Juan Gorrrez => Juan Gorez
		var returns;
		var repeat = true;
		returns = name;
		while (repeat) {
			repeat = false;
			name.map((char, index) => {
				if (char === name[index - 1] && char === name[index - 2]) {
					returns = name.slice(0, index - 2) + name.slice(index, name.length);
					repeat = true;
					console.log('NO TRIPLES', name, '=>', returns);
					name = returns;
				}
			});
		}
		return returns;
}

var noDoublesAfterConsonant = name => {
		// Thomas Fllane => Thomas Fillane
		var returns;
		returns = name;
		name.map((char, index) => {
				if (
					char === name[index - 1] &&
					!vowels.concat(['h', 'r', 'y', 'á', 'é', 'í']).includes(name[index - 2].toLowerCase()) &&
					!vowels.includes(char)
				) {
						returns = name.insert(vowels[Math.floor(Math.random() * 5)], index - 1);
						console.log('NO DOUBLES AFTER CONSONANT', name, '=>', returns);
				}
		});
		return returns;
}

var vowelAfterEne = name => {
		// Sylvia Numeñ => Sylvia Numeña
		var returns;
		returns = name;
		name.map((char, index) => {
				if (char === 'ñ' && index === name.length - 1) {
						returns = name + ['a', 'o', 'e'][Math.floor(Math.random() * 3)];
						console.log('CANNOT END WITH Ñ', name, '=>', returns);
				}
		});
		return returns;
}

var noRepeatedChunks = name => {
		// Josefina Caranananezan => Josefina Caranezan
		var returns;
		var chunks = {even: '', odd: ''};
		var current;
		var repeatcount = {even: 0, odd: 0};
		returns = name;
		name.map((char, index) => {
				current = index % 2 ? 'odd' : 'even';
				if (name.slice(index, index + 2) === chunks[current]) {
						repeatcount[current] += 1;
				} else {
						if (repeatcount[current] > 1) {
								returns = name.slice(
										0, index - (repeatcount[current] * 2)
								) + name.slice(
										index, name.length
								);
								repeatcount[current] = 0;
								console.log('NO REPEATED CHUNKS', name, '=>', returns)
						}
						chunks[current] = name.slice(index, index + 2);
				}
		})
		return returns;
}

var nameRules = [
		noTriples,
		noRepeatedChunks,
		vowelAfterEne,
		noDoublesAfterConsonant,
		normalCapitalization,
];
