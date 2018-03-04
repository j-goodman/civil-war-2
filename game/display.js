var display = {};

window.onload = () => {
    display.main = new Block ('block');
    display.main.addToPage();
    display.main.text('The North American Civil War has raged for a hundred years. The continent is rocked by cannonfire. You\'re the wagon sargeant of a unit of six soldiers, your job is to manage the rations and equipment.');
    
    display.location = new Block ('bubble', 'LOCATION');
    display.location.update = () => {
        var locationDescription = 'Your unit is in the ' + COPY.territoryDescriptors[game.player.unit.location.biome] + ' of ' + game.player.unit.location.name + '. On your borders are ';
        locationDescription += commaList(game.player.unit.location.borderNames) + '.';
        display.location.content = locationDescription;
        display.location.node.innerText = display.location.node.className.includes('small') ?
            display.location.title:
            display.location.content;
    }
    
    display.troops = new Block ('bubble', 'TROOPS');
    display.troops.update = () => {
        var block;
        var unitList = 'You have ' + game.player.unit.troops.filter((soldier) => {
            return soldier.division === 'infantry'
        }).length + ' infantry, ' + game.player.unit.troops.filter((soldier) => {
            return soldier.division === 'cavalry'
        }).length + ' cavalry, and ' + game.player.unit.troops.filter((soldier) => {
            return soldier.division === 'artillery'
        }).length + ' artillery.'
        game.player.unit.troops.map((soldier) => {
            block = new Block ('bubble', soldier.name + ', ' + capitalize(soldier.division));
            block.content = `${soldier.rank} ${soldier.name}
            ${capitalize(soldier.division)}
            
            In good health.
            
            From the ${soldier.home.type} of ${soldier.home.name}.
            Speaks ${commaList(Object.keys(soldier.languages).map((lang) => {
              return soldier.languages[lang] + ' ' + (capitalize(lang));
            }))}.
            `
            display.troops.childBlocks.push(block);
        });
        display.troops.content = unitList;
    }
    
    display.main.nest(
        display.location,
        display.troops,
    )
    display.update();
}

display.update = () => {
    display.location.update();
    display.troops.update();
}
