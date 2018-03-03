var display = {};

window.onload = () => {
    display.main = new Block ('block');
    display.main.addToPage();
    display.main.text('The North American Civil War has raged for a hundred years. The continent is rocked by cannonfire. You\'re the wagon sargeant of a unit of six soldiers, your job is to manage the rations and equipment.')
    
    display.location = new Block ('bubble', 'LOCATION');
    
    var locationDescription = 'Your unit is in the ' + COPY.territoryDescriptors[game.player.unit.location.biome] + ' of ' + game.player.unit.location.name + '. On your borders are ';
    locationDescription += commaList(game.player.unit.location.borderNames) + '.';
    display.location.content = locationDescription;
    
    display.troops = new Block ('bubble', 'TROOPS');
    var unitList = 'You have ' + game.player.unit.troops.filter((soldier) => {
        return soldier.division === 'infantry'
    }).length + ' infantry, ' + game.player.unit.troops.filter((soldier) => {
        return soldier.division === 'cavalry'
    }).length + ' cavalry, and ' + game.player.unit.troops.filter((soldier) => {
        return soldier.division === 'artillery'
    }).length + ' artillery. The soldiers in your unit are '
    unitList += commaList(game.player.unit.troops.map((soldier) => { return soldier.name })) + '.';
    display.troops.content = unitList;
    
    display.main.nest(
        display.location,
        display.troops,
    )
}