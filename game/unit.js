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
    return wheels.random(MAP);
}

Unit.prototype.goTo = function (territoryName) {
    if (this.location.borderNames.includes(territoryName)) {
        this.location = MAP[territoryName];
        this.troops.map(soldier => {
            soldier.location = this.location;
        });
        this.incurInjury();
        display.update();
    } else {
        console.error(territoryName + ' doesn\'t border ' + this.location.name + '.');
    }
};

Unit.prototype.incurInjury = function () {
    if (Math.round(Math.random())) {
        let victim = wheels.random(this.troops);
        let injury = wheels.random(game.injuries);
        console.log('victim\'s injuries', victim.injuries);
        console.log(injury.conditions(victim));
        if (injury.conditions(victim)) {
            let newInjury = new Injury(victim, injury);
            victim.injuries.push(newInjury);
            console.log(injury.describe(victim));
        }
    }
};
