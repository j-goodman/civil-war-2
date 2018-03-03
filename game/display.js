var display = {};

window.onload = () => {
    display.main = new Block ('block');
    display.main.addToPage();
    display.main.text('The North American Civil War has raged for a hundred years. The continent is rocked by cannonfire. You\'re the wagon sargeant of a unit of six soldiers, your job is to manage the rations and equipment.')
    
    display.location;
    display.location = new Block ('bubble', 'LOCATION');
    
    var locationDescription = 'Your unit is in the ' + COPY.territoryDescriptors[game.player.unit.location.biome] + ' of ' + game.player.unit.location.name + '. On your borders are ';
    
    game.player.unit.location.borderNames.map((name, index) => {
        if (index === game.player.unit.location.borderNames.length - 1) {
            locationDescription += game.player.unit.location.borderNames.length === 2 ?
            ' and ' + name + '.' :
            ', and ' + name + '.' ;
        } else if (index === 0) {
            locationDescription += name;
        } else {
            locationDescription += ', ' + name;
        }
    })
    
    display.location.content = locationDescription;
    
    display.main.nest(
        display.location,
    )
}