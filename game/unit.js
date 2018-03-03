var Unit = function (flag) {
    var i;
    var count;
    
    this.flag = flag
    this.troops = [];
    count = 5;
    for (i=0; i<count-2; i++) {
        this.troops.push(new Person ('infantry'));
    }
    this.troops.push(new Person ('cavalry'));
    this.troops.push(new Person ('artillery'));
    this.location = MAP['Sonora'];
}

var Person = function (division) {
    this.name = randomName();
    this.division = division;
}

var randomName = () => {
    var names;
    names = [
    // 110th Regiment Colored Infantry
    //This regiment was organized at Pulaski, Tenn., from November 20, 1863, to January 14, 1864, as the 2d regiment Alabama volunteers, A.D. [African Descent], to serve three years. Its designation was changed to 110th regiment U.S. Colored Troops June 23, 1864. It was mustered out of service February 6, 1866.

    // Lieutenant Colonel
    "Dedrick F. Tiedemann",

    // Major
    "William C. Hawley",

    // Captains
    "Jacob Kemnitzer",
    "Alexander Jamison",
    "Thomas Oldham",
    "Norton Campbell",
    "Thomas Kennedy",
    "Charles A. Beekert",
    "Henry McNelly",
    "Robert McMillan",
    "James L. Buck",

    // First Lieutenants
    "Henry Blinn",
    "Theodore Bachly",
    "William Leonard",
    "Henry Sprague",
    "Jeremiah Groff",
    "Richard Atkin",
    "James Duncan",
    "Edgar McLean",
    "Charles M. Linn",
    "David Smart",

    // Second Lieutenants
    "John Lanebly",
    "Frank S. Kellogg",
    "Charles C. Beggs",
    "Hiram Jones",
    "Malcolm Stanhouse",

    // Surgeon
    "Thaddeus Donohue",

    // Assistant Surgeon
    "John Little",

    // Chaplain
    "William King",

    // Mexican men who died in Oaxaca in 1870

    "Gregorio Mateo",
    "Manuel Patrosinio",
    "Mariano Ignacio",
    "Leonardo Pedro",
    "Juan Capistrano",
    "Juan Esteban",
    "Anastasio Vicente",
    "Clemente Pedro",
    "Feliciano Alejando",
    "Gabriel Bautista Santiago",
    "José María",
    "Juan Antonio",
    "Salvador Luiz",
    "Vicente Hilario",
    "Inacio Francisco",
    "Manuel Pedro",
    "Vicente Felipe",
    "Miguel Juan Jose",
    "Florencío Mariano",
    "Pedro Francisco",
    "José Mateo",
    "Victoriano Mareano",
    "Antonio Diego",
    "Antonio Hilario",
    "Feliciano Bartolomé",
    "Esteban José Maria",
    "Leveriano José",
    "Luis Pedro",
    "Matias Pedro",
    "Pedro Matias",
    "Tiburcio Miguel",
    "Agustin Juan",
    "Anastasio Antonio",
    "Manuel Martin",
    "Domingo Ambrosio",
    
    // Men of the Fifth Corps of the Army of the Potomac

    // FIRST DIVISION
    // First Brigade
    "James Barnes",
    "Charles Roberts",
    "Joseph Hayes",
    "William S. Tilton",
    "Emory Belton",
    "Elisha Marshall",
    "Charles A. Johnson",
    "Charles M. Prevost",
    "Lewis Wentworth",

    // Second Brigade
    "Charles Griffin",
    "Charles Alexander",
    "Patrick Guiney",
    "Francis J. Parker",
    "Jonathan Childs",
    "James McQuade",
    "Jacob Sweitzer",

    // Third Brigade
    "T. B. W. Stockton",
    "Adelbert Ames",
    "Norval Welch",
    "William Huson",
    "Nelson B. Bartram",
    "Freeman Conner",
    "Orpheus Woodward",
    "Jonas H. Titus Jr.",

    // Artillery
    "Augustus Martin",
    "Richard Waterman",
    "Charles E. Hazlett",
    
    // French soldiers who participated in the Battle of Trafalgar

    "Jean Pierre Roustant",
    "Felix Jacon",
    "Pierre Feburier",
    "Joseph Lebayle",
    "Guillaume Rogue",
    "Francois Saillard",
    "Charles Foullon",
    "Joseph Peyron",
    "Jacques Blanchon",
    "Laurent Landry",
    "Marial Martin",
    "Marc Antoine Giraud",
    "Nicolas Collignon",
    "Jean Marie Fayeulle",
    "Joseph Roger",
    "Jacques Bonhumme",
    "Jean Maraux",
    "Nicolas Chelin",
    "Jean Nicolas Bernard",
    "Jean Javaux",
    "Jacques Lubjoie",
    "Antoine Aubain",
    "Pierre Chouleur",
    "Jean Maurice Arrissart",
    "Joseph Langlais",
    "Jean Baptiste Fillier",
    "Louis Sebastien Paijen",
    "Jean B Bauzard",
    "Jean Germain Denant",
    "Louis Antoine Feraud",
    "Auguste Serrier",
    "Charles Alexandre Raillard",
    "Pierre Rogue",
    "Julien Jean Saillard",
    "Louis C Paillard",
    "Cesar Dautpoule",
    "Auguste Delahuiliniere",
    "Andre Nerciat",
    "Honore Masse",
    "Hypolyte Cruchier",
    "Vincent Hipolyte Figuier",
    "Xavier Bonnafos",
    ];
    return names[Math.floor(Math.random() * names.length)];
}