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
    
    // Name character:
    this.name = generateName(this);
}

Person.prototype.languageList = function () {
    return Object.keys(this.languages);
}