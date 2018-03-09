var Injury = function (victim, type) {
    this.name = type.name;
    this.victim = victim;
    this.ongoing = type.ongoing;
    console.log('the type!', type);
    // this.onTurn = type.onTurn.bind(this, victim);
    // this.describe = type.describe.bind(this, victim);
};

var InjuryType = function (ob) {
    Object.keys(ob).map(key => {
        this[key] = ob[key];
    });
};

game.injuries = {
    snakebite: new InjuryType ({
        name: 'rattlesnake bite',
        describe: (victim) => {
            return(`${victim.name} was bit by a rattlenake.`);
        },
        ongoing: `Suffering from poisoning from a snakebite`,
        onTurn: (victim) => {
            victim.health -= 15;
            if (victim.health < 2) {
                victim.die(victim => `${victim.name} succumbed to the rattlesnake poison and died.`);
            }
        },
    })
};