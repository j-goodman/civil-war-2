var Person = function (division, homeName) {
    this.division = division;
    this.rank = 'Pvt.';
    this.home = MAP[homeName];
    this.languages = {};
    this.languages[this.home.languages[0]] = 'fluent';
    if (this.home.languages.length > 1 && Math.round(Math.random())) {
        this.languages[
            this.home.languages[
                Math.floor(Math.random() * (this.home.languages.length - 1)) + 1
            ]
        ] = ['basic', 'proficient', 'fluent'][Math.floor(Math.random() * 3)];
    }
    // Assign name:
    var lang;
    lang = pickRandom(this.home.languages);
    this.languages[lang] = this.languages[lang] ? this.languages[lang] : 'basic';
    if (namesByLanguage[lang]) {
        this.name = generateName(lang);
    } else {
        this.name = generateName(this.home.languages[0]);
    }
}