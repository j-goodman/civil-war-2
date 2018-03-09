var Unit = function (flag) {
    var i;
    var count;
    
    this.flag = flag
    this.troops = [];
    count = 5;
    for (i=0; i<count-2; i++) {
        this.troops.push(new Person ('infantry', randomLocation().name));
    }
    this.troops.push(new Person ('cavalry', randomLocation().name));
    this.troops.push(new Person ('artillery', randomLocation().name));
    this.player = false;
    this.location = randomLocation();
}

var randomLocation = () => {
  return MAP[Object.keys(MAP)[Math.floor(Math.random() * Object.keys(MAP).length)]];
}

Unit.prototype.goTo = function (territoryName) {
    if (this.location.borderNames.includes(territoryName)) {
        this.location = MAP[territoryName];
        this.incurInjury();
        this.troops.map(soldier => {
            soldier.territory = this.territory;
        });
        display.update();
    } else {
        console.error(territoryName + ' doesn\'t border ' + this.location.name + '.');
    }
};

Unit.prototype.incurInjury = function () {
    if (Math.round(Math.random())) {
        let victim = pickRandom(this.troops);
        let injury = pickRandom(game.injuries);
        console.log('victim\'s injuries', victim.injuries);
        let newInjury = new Injury(victim, injury);
        console.log('being pushed', newInjury);
        victim.injuries.push(newInjury);
        console.log(injury.describe(victim));
    }
};