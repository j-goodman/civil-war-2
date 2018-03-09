var Person = function (division, homeName) {
    this.division = division;
    this.rank = 'Pvt.';
    this.home = MAP[homeName];
    this.languages = {};
    this.languages[this.home.languages[0]] = 'fluent';
    this.injuries = [];
    this.health = 12;
    this.alive = true;
    this.territory = null;
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

Person.prototype.die = function (message) {
    this.alive = false;
    this.territory.graveyard.push(this);
    console.log(message);
};