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

namesByLanguage = {
    english: [
        // Engineers
        'Benjamin Baker',
        'William Baker',
        'Joseph Bazalgette',
        'James Beatty',
        'Henry Bessemer',
        'Ronald Eric Bishop',
        'James Brindley',
        'Isambard Kingdom Brunel',
        'Sydney Camm',
        'Donald Campbell',
        'William Tierney Clark',
        'Geoffrey de Havilland',
        'Edmund Dummer',
        'John Ambrose Fleming',
        'Tom Flowers',
        'John Fowler',
        'Benjamin Hick',
        'John Hick',
        'Eric Laithwaite',
        'William Mackenzie',
        'R.J. Mitchell',
        'Henry Royce',
        'Nevil Shute',
        'George Stephenson',
        'Thomas Telford',
        'Charles Todd',
        'Barnes Wallis',
        'John Webster',
        'Joseph Whitworth',
        // Explorers
        'Gertrude Bell',
        'Thomas Cavendish',
        'James Cook',
        'William Dampier',
        'John Davis',
        'Charles Montagu Doughty',
        'Francis Drake',
        'Ranulph Fiennes',
        'Martin Frobisher',
        'Rob Gauntlett',
        'Robin Knox-Johnston',
        'Michael Palin',
        'Walter Raleigh',
        'Robert Falcon Scott',
        'Ed Stafford',
        'Freya Stark',
        'Wilfred Thesiger',
        'Henry Timberlake',
        // Filmmakers
        'Richard Attenborough',
        'John Boorman',
        'John and Roy Boulting',
        'Alan Clarke',
        'Charlie Chaplin',
        'Mike Figgis',
        'Lewis Gilbert',
        'David Hare',
        'Alfred Hitchcock',
        'Peter Howitt',
        'Humphrey Jennings',
        'Stan Laurel',
        'David Lean',
        'Mike Leigh',
        'Ken Loach',
        'Nick Love',
        'Anthony Minghella',
        'Carol Morley',
        'Mike Newell',
        'Christopher Nolan',
        'Nick Park',
        'Michael Powell',
        'Guy Ritchie',
        'Ken Russell',
        'Ridley Scott',
        'Tony Scott',
    ],
    spanish: [
        'Felipe González',
        'Rubén Camarillo',
        'Carlos Lozano',
        'Alejandro González',
        'Jaime Ochoa',
        'Fernando Castro',
        'Francisco Obregón',
        'Josefina Cota',
        'Fernando Ortega',
        'Alejandro Cárdenas',
        'Sebastián Calderón',
        'Manuel Velasco',
        'María Orantes',
        'Rubén López',
        'Gustavo Muñoz',
        'Ramón Noriega',
        'Fernando Meléndez',
        'José Llamas',
        'Ernesto Saro',
        'Jesús Valdés',
        'Marta Govea',
        'Jesús Dueñas',
        'Rogelio Sánchez',
        'Rodolfo Dorador',
        'Ricardo Rodríguez',
        'Humberto Quezada',
        'Luis García',
        'Francisco Arroyo',
        'David Jiménez',
        'Lázaro Mazón',
        'José Márquez',
        'Francisco Xavier',
        'Jesús Murillo	',
        'Eva Sandoval',
        'Héctor Pérez',
        'Ramiro García',
        'Beatriz Zavala',
        'Ulises Núñez',
        'Ivonne Pacheco',
        'Jesús García',
        'Silvano Conejo',
        'Marko Cortés Mendoza',
        'Adrián Rivera Pérez',
        'Mariana Leticia Rivera',
        'Graco Ramírez',
    ],
    inuktitut: [
        'Eva Aariak',
        'Acoutsina',
        'Will Adams',
        'Johnny Ned Adams',
        'Susan Aglukark',
        'Leona Aglukkaq',
        'Olayuk Akesuk',
        'Atuat Akkitirq',
        'Tony Akoak',
        'David Alagalak',
        'Ovide Alakannuark',
        'Madeleine Allakariallak',
        'Titus Allooloo',
        'Simeonie Amagoalik',
        'Jack Anawak',
        'William Andersen',
        'Wally Andersen',
        'Paul Apak Angilirq',
        'Michael Angottitauruq',
        'Stephen Angulalik',
        'Irene Kataq Angutitok',
        'Moses Appaqaq',
        'Joe Arlooktoo',
        'Goo Arlooktoo',
        'Germaine Arnaktauyok',
        'Alethea Arnaquq-Baril',
        'Silas Arngna\'naaq',
        'James Arreak',
        'James Arvaluk',
        'Kenojuak Ashevak',
        'Shuvinai Ashoona',
        'Pitseolak Ashoona',
        'Andrew Atagotaaluk',
        'Aua',
        'Moses Aupaluktuq',
        'Levi Barnabas',
        'Ernie Bernhardt',
        'Paul-André Brasseur',
        'Levinia Brown',
        'Caubvick',
        'Nellie Cournoyea',
        'Charlie Crow',
        'Tagak Curley',
        'Beatrice Deer',
        'Lisa Dempster',
        'Ebierbing',
        'Randy Edmunds',
        'Edna Elias',
        'Monica Ell-Kanayuk',
        'Joe Enook',
        'Tommy Enuaraq',
        'Elijah Erklo',
        'Kingmeata Etidlooi',
        'Tivi Eto',
        'Mark Evaloarju',
        'Joe Allen Evyagotaila',
        'Alice Masak Frenc',
        'Simon Gibbon',
        'Melissa Haney',
        'Glenna Hansen',
        'Ann Meekitjuk Hanso',
        'Donald Havioya',
        'George Hickes Jr',
        'George Hickes Sr',
        'Joseph Idlout',
        'Lucie Idlou',
        'Osuitok Ipeele',
        'Alootook Ipellie',
        'David Iqaqrial',
        'Peter Irni',
        'Enoki Irqittu',
        'Elisapie Isaac',
        'Peter Ittinuar',
        'Madeline Ivalu',
        'Paul-Dylan Ivalu',
        'David Joanasie',
        'Yvonne Jones',
        'Helen Kalvak',
        'Nancy Karetak-Lindell',
        'Peter Kattuk',
        'Simeonie Keenainak',
        'Pauloosie Keyootak',
        'Janet Kigusiuq',
        'Kikkik',
        'Ipeelee Kilabuk',
        'Peter Kilabuk',
        'Kiviaq',
        'David Pisurayak Kootook',
        'Madeleine Isserkut Kringayak',
        'Peter Kritaqliluk',
        'Zacharias Kunuk',
        'Floyd Kuptana',
        'Rosemarie Kuptana',
        'Nellie Kusugak',
        'Lorne Kusugak',
        'Michael Kusugak',
        'Jose Kusuga',
        'Johannes Lamp',
        'Sarah Le',
        'Bill Lyal',
        'Helen Maksagak',
        'Steve Mapsala',
        'Mosha Michae',
        'Mika',
        'Johnny Mik',
        'Rebecca Mik',
        'Andy Mik',
        'Simeon Mikkungwak',
        'Nakasu',
        'Agnes Nanoga',
        'Patterk Netse',
        'John Ningar',
        'Johnny Ningeonga',
        'William Noa',
        'Samuel Nuqingaq',
        'Jobie Nutara',
        'Natan Obe',
        'Paul Okali',
        'Abe Okpik',
        'Jessie Oonark',
        'Orpingali',
        'Hezakiah Oshutapi',
        'John Pangnar',
        'Charlie Panigonia',
        'Pauloosie Panilo',
        'Par',
        'Enuk Pauloosie',
        'Lena Pedersen',
        'Aaju Pete',
        'Looty Pijamin',
        'David Ruben Piqtouku',
        'Peter Pitseolak',
        'Annabella Piugattu',
        'Calvin Pokia',
        'Annie Pootoogoo',
        'Kananginak Pootoogook',
        'Napachie Pootoogook',
        'Patty Pottl',
        'Pudlo Pudla',
        'Kenoayoak Pudlat',
        'Ludy Pudlu',
        'Uriash Puqiqna',
        'Andrew Qappi',
        'Lucy Qinnuayua',
        'Emilino Qirngnuq',
        'Rachel Qitsualik-Tinsle',
        'Paul Quass',
        'Tumasi Quiss',
        'George Qulaut',
        'Taamusi Qumaq',
        'Madeleine Redfer',
        'Keith Rusel',
        'Todd Russell',
        'Pitaloosie Sail',
        'Pauta Sail',
        'Tom Sammurtok',
        'Alexander Sammurtok',
        'Joe Savikataaq',
        'Eric Schwei',
        'Elisapee Sheutiapi',
        'John Shiwa',
        'Isaac Shooyoo',
        'Nick Sikkuar',
        'David Simailak',
        'Mary Simo',
        'Vince Stee',
        'Donald Sulu',
        'Thomas Sulu',
        'Tanya Taga',
        'Joe Talirunili',
        'Louis Tapardju',
        'Peter Taptun',
        'Ningeokuluk Teeve',
        'Manitok Thompso',
        'Willie Thrashe',
        'Irene Avaalaaqiaq Tiktaalaa',
        'John Tikta',
        'Kane Tologana',
        'Tookoolit',
        'Simon Tookoome',
        'Jordin Tooto',
        'Hunter Tooto',
        'Victor Tungilik',
        'Lucy Tasseor Tutsweeto',
        'Marion Tuu\'lu',
        'Jeannie Ugyu',
        'Abraham Ulrika',
        'Umi',
        'Natar Ungalaa',
        'Uvavnu',
        'Sheila Watt-Cloutie',
        'Charlie Wat',
        'Rebekah William',
    ],
    french: [
        // Artists and entertainers from Quebec
        'Denys Arcand',
        'Paul Arcand',
        'Gilles Archambault',
        'André Arthur',
        'Eva Avila',
        'Rachid Badouri',
        'René Balcer',
        'Raoul Barré',
        'Michel Barrette',
        'Jay Baruchel',
        'Victor-Lévy Beaulieu',
        'Daniel Bélanger',
        'Marie-Claire Blais',
        'Paul Bley',
        'Lothaire Bluteau',
        'Laria Bolduc',
        'Paul-Émile Borduas',
        'Isabelle Boulay',
        'Gerry Boulet',
        'Pierre Bouvier',
        'Glenda Braganza',
        'Michel Brault',
        'Geneviève Bujold',
        'Pascale Bussières',
        'Win Butler',
        'Roch Carrier',
        'Charles Carson',
        'Robert Charlebois',
        'Régine Chassagne',
        'Coeur de Pirate',
        'Leonard Cohen',
        'Marie-Josée Croze',
        'Peter Cullen',
        'Elisha Cuthbert',
        'Sylvia Daoust',
        'Charles Daudelin',
        'Esther Delisle',
        'Yvon Deschamps',
        'Céline Dion',
        'Georges Dor',
        'Hélène Dorion',
        'Fifi D\'Orsay',
        'Jean Duceppe',
        'Diane Dufresne',
        'Roy Dupuis',
        'Marcelle Ferron',
        'Jennifer Finnigan',
        'Serge Fiori',
        'Glenn Ford',
        'Garou',
        'Mitsou Gélinas',
        'Jean-Claude Germain',
        'Huntley Gordon',
        'Pierre Granche',
        'Bruce Greenwood',
        'Sylvain Grenier',
        'Anne Hébert',
        'Prudence Heward',
        'Pierre Jalbert',
        'Will James',
        'René Jodoin',
        'Oliver Jones',
        'Claude Jutra',
        'Sheldon Kagan',
        'Florence La Badie',
        'Éric Lapointe',
        'Pierre Lapointe',
        'Stéphanie Lapointe',
        'Carole Laure',
        'Lucie Laurier',
        'Daniel Lavoie',
        'Louise Lecavalier',
        'Félix Leclerc',
        'Jean Leloup',
        'Robert Lepage',
        'Édouard Lock',
        'Norm Macdonald',
        'Marie-Mai Bouchard',
        'Marilou Bourdon',
        'André Mathieu',
        'Norman McLaren',
        'Guido Molinari',
        'Edythe Morahan de Lauzon',
        'Jean-Paul Mousseau',
        'Ben Mulroney',
        'Émile Nelligan',
        'Maryse Ouellet',
        'Kevin Parent',
        'Bruno Pelletier',
        'Pierre Perrault',
        'Oscar Peterson',
        'Luc Plamondon',
        'Mordecai Richler',
        'Jean-Paul Riopelle',
        'Michel Rivard',
        'Michael Sarrazin',
        'Anne Savage',
        'Mack Sennett',
        'William Shatner',
        'Douglas Shearer',
        'Norma Shearer',
        'René Simard',
        'Devon Soltendieck',
        'Eva Tanguay, singer',
        'Miyuki Tanobe',
        'Marie-Élaine Thibert',
        'Michel Tremblay',
        'Roland Michel Tremblay',
        'Armand Vaillancourt',
        'Pierre Vallières',
        'Gino Vannelli',
        'Gilles Vigneault',
        'Annie Villeneuve',
        'Arthur Villeneuve',
        'Andrée Watters',
        'Hal Willis',
        // Presidents of the Third Republic
        'Adolphe Thiers',
        'Patrice de Mac-Mahon',
        'Jules Grévy',
        'Sadi Carnot',
        'Jean Casimir-Périer',
        'Félix Faure',
        'Émile Loubet',
        'Armand Fallières',
        'Raymond Poincaré',
        'Paul Deschanel',
        'Alexandre Millerand',
        'Gaston Doumergue',
        'Paul Doumer',
        'Albert Lebrun',
    ],
    swedish: [
        // Swedish-American scientists
        'Carl David Anderson',
        'John Boodin',
        'Walter Ekblaw',
        'Per Enflo',
        'David Lindberg',
        'Kerstin Lindblad',
        'Glenn Seaborg',
        'Max Tegmark',
        'Ernest Vestine',
        'Phil Mickelson',
    ],
    russian: [
        // Dmitry Medvedev's cabinet in March 2018
        'Sergey Lavrov',
        'Vladimir Kolokoltsev',
        'Anton Siluanov',
        'Sergei Shoygu',
        'Vladimir Puchkov',
        'Alexander Konovalov',
        'Denis Manturov',
        'Maxim Oreshkin',
        'Veronika Skvortsova',
        'Maxim Topilin',
        'Olga Vasilyeva',
        'Maksim Sokolov',
        'Mikhail Men',
        'Sergey Donskoy',
        'Alexander Novak',
        'Vladimir Medinsky',
        'Pavel Kolobkov',
        'Nikolai Nikiforov',
        'Aleksandr Tkachyov',
        'Alexander Galushka',
        'Oleg Savelyev',
    ],
    samoan: [
        // Members of the 16th Samoan Parliament (elected 2016)
        'A\'eau Peniamina	Falealupo',
        'Afamasaga Lepuiai Rico Tupai',
        'Afoa Amituanai Faleulu Mauli',
        'Alaiasa Sepulona Moananu',
        'Ali\'imalemanu Alofa Tuuau',
        'Amituanai Fagaivalu Kenrick Samu',
        'Tuilaepa Aiono Sailele Malielegaoi',
        'Aumua Isaia Lameko',
        'Faalogo Iosefa Sopi',
        'Faaolesa Katopau Ainuu',
        'Faasootauloa Pati Taulapapa',
        'Fa\'aulusau Rosa Duffy-Stowers',
        'Faimalotoa Kika Iemaima Stowers',
        'Faumuina Asi Pauli',
        'Faumuina Tiatia Liuga',
        'Fiame Naomi Mata\'afa	Lotofaga',
        'Fuimaono Teo Samuelu Teo',
        'Gatoloaifaana Amataga Alesana-Gidlow',
        'Ili Setefano Taateo Tafili',
        'Laauli Leuatea',
        'Fonotoe Nuafesili',
        'Lautafi Fio Selafi Purcell',
        'Leaana Ronnie Posini',
        'Lealailepule Rimoni Aiafi',
        'Leaupepe Toleafoa Faafisi',
        'Lenatai Victor Tamapua',
        'Keneti Sio',
        'Lopao\'o Natanielu Mua',
        'Laki Mulipola Leiataua',
        'Nafoitoa Talaimanu',
        'Nonu Lose Niumata',
        'Olo Fiti Afoa Vaai',
        'Hon Niko Lee Hang',
        'Pau Sefo Pau',
        'Peseta Vaifou Tevaga\'ena',
        'Hon Sala Fata Pinati',
        'Dr Salausa John Ah Ching',
        'Seiuli Ueligitone Seiuli',
        'Sili Epa Tuioti',
        'Sooalo Umi Feo Mene',
        'Sulamanaia Fetaiai Tauiliili',
        'Taefu Lemi',
        'Tafua Maluelue Tafua',
        'Tapulesatele Mauteni Esera',
        'Tialavea Fea Leniu',
        'Tofa Foleni Lio Tama Galu',
        'Toleafoa Ken Vaafusuaga Poutoa',
        'To\'omata Aki Tuipea',
        'Tuifaasisina Leleisiuao',
        'Tuitama Talalelei',
    ],
    cantonese: [
        // List of Party Secretaries for the Guandong Region
        'Ye Jianying',
        'Tao Zhu',
        'Zhao Ziyang',
        'Huang Yongsheng',
        'Liu Xingyuan',
        'Ding Sheng',
        'Zhao Ziyang',
        'Wei Guoqing',
        'Xi Zhongxun',
        'Ren Zhongyi',
        'Lin Ruo',
        'Xie Fei',
        'Li Changchun',
        'Zhang Dejiang',
        'Wang Yang',
        'Hu Chunhua',
    ],
    arabic: [
        // Arab-American writers
        'Elmaz Abinader',
        'Diana Abu-Jaber',
        'Elia Abu Madi',
        'Etel Adnan',
        'Lorraine Ali',
        'Khalil Gibran',
        'Suheir Hammad',
        'Ray Hanania',
        'Daoud Kuttab',
        'Khaled Mattawa',
        'Mikhail Naimy',
        'Naomi Shihab Nye',
        'Ameen Rihani',
        'Abraham Rihbany',
        // Free Egyptians Party members of Parliament
        'Essam Khalil',
        'Nader El Sharkawy',
        'Alaa Abed',
        'Belal Habas',
        'Shehab Wagie',
        'Mona Gab Alla',
        'Ahmed Saif',
        'Manal Abdel-Hami',
        'Nassr El Kafa',
        'Amir Yousse',
        'Salah Fadel',
        'Naguib Sawiri',
        'Mohammed Salmaw',
        'Farouk El-Ba',
        'Yehia El-Gama',
        'Sakina Foua',
        'Nadim Elia',
        'Ragy Solima',
        'Mahmoud Al Alil',
    ],
    tagolog: [
        // Speakers of the House of Representatives of the Phillipines
        'Eric Singson',
        'Mercedes Alvarez',
        'Fredenil Castro',
        'Raneo Abu',
        'Miro Quimbo',
        'Pia Cayetano',
        'Gwendolyn Garcia',
        'Mylene Garcia-Albano',
        'Sharon Garin',
        // Vice Presidents of the Phillipines
        'Salvador Laurel',
        'Corazon Cojuanco-Aquino',
        'Joseph Ejército Estrada',
        'Gloria Macapagal Arroyo',
        'Joseph Ejercito Estrada',
        'Manuel de Castro',
        'Jejomar Binay',
        'Benigno Aquino',
        'Maria Leonor Robredo',
    ],
    // vietnamese: [],
    // german: [],
    // mandarin: [],
    // navajo: [],
    // cherokee: [],
    // yaqui: [],
    // nahuatl: [],
}