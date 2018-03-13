var Injury = function (victim, type) {
    this.name = type.name;
    this.victim = victim;
    this.ongoing = type.ongoing;
    this.onTurn = type.onTurn;
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
    hypothermia: new InjuryType ({
        name: 'hypothermia',
        describe: (victim) => {
            return(`${victim.name} is suffering from hypothermia in the extreme cold.`);
        },
        ongoing: `Suffering from hypothermia`,
        onTurn: (victim) => {
            victim.health -= 15;
            if (victim.health < 2) {
                victim.die((victim => { `${victim.name} succumbed to the cold and died.` })());
            }
            if (!['arctic', 'taiga', 'mountains'].includes(victim.location.biome)) {
                victim.injuries.filter( inj => {
                    return inj.name === 'hypothermia'
                })[0].resolve();
            }
        },
        conditions: (victim) => {
            console.log(`Checking conditions against`, victim);
            console.log(`Result`, (
                victim.location.biome === 'arctic' &&
                !['arctic', 'taiga'].includes(victim.home.biome)
            ))
            return (
                victim.location.biome === 'arctic' &&
                !['arctic', 'taiga'].includes(victim.home.biome)
            )
        },
        odds: 30, // percent
    })
};

Injury.prototype.resolve = function () {
    // Cure afflicted soldier
};

// Injuries:
// evironmental:
//   - rattlesnake (desert)
//   - heatstroke (desert)
//   - hypothermia (arctic)
// other:
//   - malnutrition (low rations)
// combat:
//   - gunshot (maybe different kinds)
//   - stab wound
