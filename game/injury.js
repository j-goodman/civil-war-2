var Injury = function (victim) {
    this.name = 'bullet wound';
    this.victim = victim;
    this.onTurn = function () {
        // this.health -= 10;
        // display.addNotification(`${victim.name} has a ${this.name}.`);
    }.bind(victim);
};