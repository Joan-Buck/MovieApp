'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Movies', [
    {
        title: "Emma",
        plot: 'In 1800s England, a well meaning but selfish young woman meddles in the love lives of her friends.',
        imageLink: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/emma.2020.ar_480x.progressive.jpg",
        director: 'Autumn de Wilde',
        movieRating: 'PG-13',
        year: 2020,
        duration: '1h 37m',
        genreId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: '10 Things I Hate About You',
        plot: 'A pretty, popular teenager can\'t go out on a date until her ill-tempered older sister does.',
        imageLink: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/10thingsihateaboutyou_480x.progressive.jpg",
        director: 'Gil Junger',
        movieRating: 'PG-13',
        year: 1999,
        duration: '1h 37m',
        genreId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: 'Jumanji: The Next Level',
        plot: 'In Jumanji: The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world\'s most dangerous.',
        imageLink: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/jumaninextlevel.reg.ar_480x.progressive.jpg",
        director: 'Jake Kasdan',
        movieRating: 'PG-13',
        year: 2019,
        duration: '2h 3m',
        genreId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: 'The Lost City',
        plot: 'A reclusive romance novelist on a book tour with her cover model gets swept up in a kidnapping attempt that lands them both in a cutthroat jungle adventure.',
        imageLink: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/the-lost-city_p8r34kub_480x.progressive.jpg',
        director: 'Aaron Nee',
        movieRating: 'PG-13',
        year: 2022,
        duration: '1h 32m',
        genreId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: 'Spider-Man: Into the Spider-Verse',
        plot: 'Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.',
        imageLink: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/61c9586b3449484d7966032894877484_a31bfe67-08fc-477e-9154-4fc645c217ef_480x.progressive.jpg",
        director: 'Bob Persichetti',
        movieRating: 'PG',
        year: 2018,
        duration: '1h 57m',
        genreId: 1,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        title: 'Marry Me',
        plot: 'Music superstars Kat Valdez and Bastian are getting married before a global audience of fans. But when Kat learns, seconds before her vows, that Bastian has been unfaithful, she decides to marry Charlie, a stranger in the crowd, instead.',
        imageLink: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/marry-me_uqcrkagl_d8f0d21b-47f0-41a1-957c-efea3f7863b6_480x.progressive.jpg',
        director: 'Kat Coiro',
        movieRating: 'PG-13',
        year: 2022,
        duration: '1h 52m',
        genreId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: 'Deadpool',
        plot: 'A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.',
        imageLink: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/deadpool_64ebcd47_480x.progressive.jpg",
        director: 'Tim Miller',
        movieRating: 'R',
        year: 2016,
        duration: '1h 48m',
        genreId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: 'Little Miss Sunshine',
        plot: 'A family determined to get their young daughter into the finals of a beauty pageant take a cross-country trip in their VW bus.',
        imageLink: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/4aea90ac16b8299e3c348dbbbb7b7f9b_76e3d21c-0bb4-4679-bb6a-44472da03087_480x.progressive.jpg",
        director: 'Jonathan Dayton',
        movieRating: 'R',
        year: 2006,
        duration: '1h 41m',
        genreId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {

        title: 'The Suicide Squad',
        plot: 'Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.',
        imageLink: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/the-suicide-squad_4r654r4e---new-image_480x.progressive.jpg",
        director: 'James Gunn',
        movieRating: 'R',
        year: 2021,
        duration: '2h 12m',
        genreId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {

        title: 'King of Staten Island',
        plot: 'Scott has been a case of arrested development since his firefighter dad died. He spends his days smoking weed and dreaming of being a tattoo artist until events force him to grapple with his grief and take his first steps forward in life.',
        imageLink: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/kingofstaten_480x.progressive.jpg",
        director: 'Judd Apatow',
        movieRating: 'R',
        year: 2020,
        duration: '2h 16m',
        genreId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: "Titanic",
        plot: 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.',
        imageLink: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/c104f1bfed20481f35bc96cb9addc940_480x.progressive.jpg?v=1573588574",
        director: 'James Cameron',
        movieRating: 'PG-13',
        year: 1997,
        duration: '3h 14m',
        genreId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: 'The Godfather',
        plot: 'The Godfather follows Vito Corleone, Don of the Corleone family, as he passes the mantle to his unwilling son, Michael.',
        imageLink: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/f0fa236e71deed3e86221019c88f4231_4b5f1500-ab9b-48e9-a717-9a42935be2d9_480x.progressive.jpg?v=1573652399",
        director: 'Francis Ford Coppola',
        movieRating: 'R',
        year: 1972,
        duration: '2h 55m',
        genreId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: 'Casablanca',
        plot: 'A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco.',
        imageLink: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/casablanca.24x36_480x.progressive.jpg?v=1593723229",
        director: 'Michael Curtiz',
        movieRating: 'PG',
        year: 1942,
        duration: '1h 42m',
        genreId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: 'Forrest Gump',
        plot: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.',
        imageLink: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/03c89d6a4c0565f265ccff5c4033e8d2_480x.progressive.jpg?v=1573615828",
        director: 'Robert Zemeckis',
        movieRating: 'PG-13',
        year: 1994,
        duration: '2h 22m',
        genreId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: 'Pulp Fiction',
        plot: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
        imageLink: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/pulpfiction.2436_480x.progressive.jpg?v=1620048742",
        director: 'Quentin Tarantino',
        movieRating: 'R',
        year: 1994,
        duration: '2h 34m',
        genreId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: 'Gone With The Wind',
        plot: 'The manipulative daughter of a Georgia plantation owner conducts a turbulent romance with a roguish profiteer during the American Civil War and Reconstruction periods.',
        imageLink: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/gonewithwind.68.af_480x.progressive.jpg?v=1620588010",
        director: 'Victor Fleming',
        movieRating: 'PG',
        year: 1939,
        duration: '3h 58m',
        genreId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: 'The Curious Case of Benjamin Button',
        plot: 'Tells the story of Benjamin Button, a man who starts aging backwards with consequences.',
        imageLink: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/5fb2c9c05608cbe664344708477b7260_995b214e-c0e9-4e27-a53b-bd7a3c75fcf5_480x.progressive.jpg?v=1573613824",
        director: 'David Fincher',
        movieRating: 'PG-13',
        year: 2008,
        duration: '2h 46m',
        genreId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: 'Good Will Hunting',
        plot: 'Will Hunting, a janitor at M.I.T., has a gift for mathematics, but needs help from a psychologist to find direction in his life.',
        imageLink: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/5a82a20cfe50065a7d2755562a565288_db81af78-93db-4f53-94c2-ca5d30ab880d_480x.progressive.jpg?v=1573616176",
        director: 'Gus Van Sant',
        movieRating: 'R',
        year: 1997,
        duration: '2h 6m',
        genreId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {

        title: 'A Beautiful Mind',
        plot: 'After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish.',
        imageLink: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/b9d9f86156f801babddf7f08243c1a55_d6fa0b19-fdf3-4326-a93f-db4c4b837e68_480x.progressive.jpg?v=1573616049",
        director: 'Ron Howard',
        movieRating: 'PG-13',
        year: 2001,
        duration: '2h 15m',
        genreId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: 'Citizen Kane',
        plot: "Following the death of publishing tycoon Charles Foster Kane, reporters scramble to uncover the meaning of his final utterance; 'Rosebud'.",
        imageLink: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/179862ed95c5b009ba2e9fa5e0ca65d6_c7894b39-64da-43de-bc8e-983667609672_480x.progressive.jpg?v=1573588898",
        director: 'Orson Welles',
        movieRating: 'PG',
        year: 1941,
        duration: '1h 59m',
        genreId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: "A Nightmare on Elm Street",
        plot: 'Teenager Nancy Thompson must uncover the dark truth concealed by her parents after she and her friends become targets of the spirit of a serial killer with a bladed glove in their dreams, in which if they die, it kills them in real life.',
        imageLink: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/47db7fbcfaa5095c0e73513a31892255_69c0e622-5825-438c-bd4d-3da158131b53_480x.progressive.jpg?v=1573591573",
        director: 'Wes Craven',
        movieRating: 'R',
        year: 1984,
        duration: '1h 31m',
        genreId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: "Saw",
        plot: "Two strangers awaken in a room with no recollection of how they got there, and soon discover they're pawns in a deadly game perpetrated by a notorious serial killer.",
        imageLink: "https://www.themoviedb.org/t/p/w500/pparEGTCxcTiImyVFoKD0LX11N8.jpg",
        director: 'James Wan',
        movieRating: 'R',
        year: 2004,
        duration: '1h 43m',
        genreId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: "Scream",
        plot: "A year after the murder of her mother, a teenage girl is terrorized by a new killer, who targets the girl and her friends by using horror films as part of a deadly game.",
        imageLink: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/6065863209125e295754986589a1c93d_fd6f5762-2929-428c-99e7-a201d9190a6a_480x.progressive.jpg?v=1573652517",
        director: 'Wes Craven',
        movieRating: 'R',
        year: 1996,
        duration: '1h 51m',
        genreId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: "Hereditary",
        plot: "A grieving family is haunted by tragic and disturbing occurrences.",
        imageLink: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/hereditary_a505c7fb_480x.progressive.jpg?v=1626713768",
        director: 'Ari Aster',
        movieRating: 'R',
        year: 2018,
        duration: '2h 7m',
        genreId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: "Halloween",
        plot: "Fifteen years after murdering his sister on Halloween night 1963, Michael Myers escapes from a mental hospital and returns to the small town of Haddonfield, Illinois to kill again.",
        imageLink: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/halloween.24x36_480x.progressive.jpg?v=1616686637",
        director: 'John Carpenter',
        movieRating: 'R',
        year: 1978,
        duration: '1h 31m',
        genreId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: "Nosferatu",
        plot: "Vampire Count Orlok expresses interest in a new residence and real estate agent Hutter's wife.",
        imageLink: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/aafa8ebda72331b98ba40d47df10dae1_5348d476-039c-47d1-b0fe-5b98be906bab_480x.progressive.jpg?v=1573618779",
        director: 'F.W. Murnau',
        movieRating: 'Not Rated',
        year: 1922,
        duration: '1h 34m',
        genreId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: "The Conjuring",
        plot: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
        imageLink: "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_.jpg",
        director: 'James Wan',
        movieRating: 'R',
        year: 2013,
        duration: '1h 52m',
        genreId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: "The Conjuring 2",
        plot: "Ed and Lorraine Warren travel to North London to help a single mother raising four children alone in a house plagued by a supernatural spirit.",
        imageLink: "https://bloximages.chicago2.vip.townnews.com/kokomotribune.com/content/tncms/assets/v3/editorial/9/d4/9d40fd52-2cd1-11e6-b71b-235ac414eb93/5756fe23e792e.image.jpg?resize=500%2C741",
        director: 'James Wan',
        movieRating: 'R',
        year: 2016,
        duration: '2h 14m',
        genreId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: "The Human Centipede (First Sequence)",
        plot: "Two pretty but ditsy American girls are on a road trip through Europe. In Germany, they end up alone at night and when their car breaks down, they take shelter in an isolated villa. They wake in the morning to find themselves in a makeshift hospital along with a Japanese man.",
        imageLink: "https://m.media-amazon.com/images/I/51Yh0I49CrL._AC_.jpg",
        director: 'Tom Six',
        movieRating: 'R',
        year: 2009,
        duration: '1h 32m',
        genreId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: "It",
        plot: "In 1960, seven pre-teen outcasts fight an evil demon who poses as a child-killing clown. Thirty years later, they reunite to stop the demon once and for all when it returns to their hometown.",
        imageLink: "https://m.media-amazon.com/images/M/MV5BYjg1YTRkNzQtODgyYi00MTQ5LThiMDYtNDJjMWRjNTdjZDZlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
        director: 'Tommy Lee Wallace',
        movieRating: 'TV-PG',
        year: 1990,
        duration: '3h 12m',
        genreId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: 'Gigli',
        plot: 'Gigli is ordered to kidnap the psychologically challenged younger brother of a powerful federal prosecutor',
        imageLink: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/6e8ff82d7447cf1c05ea50dcfd80eda7_bd92d568-f2a4-4333-9b98-c078c12a9fb9_480x.progressive.jpg?v=1573592720",
        director: 'Martin Brest',
        movieRating: 'R',
        year: 2003,
        duration: '2h 1m',
        genreId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: 'American Justice',
        plot: ' maverick cop  dishes out his own brand of justice to a corrupt lawman',
        imageLink: "https://canvas-bridge.tubitv.com/YqrjThCRybjNEuSyAzj_S7_ZKUo=/0x0:900x1286/400x574/smart/img.adrise.tv/33272ccc-1458-44eb-9cd8-d379bd351feb.jpg",
        director: 'Gary Grillo',
        movieRating: 'R',
        year: 1986,
        duration: '1h 37m',
        genreId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: 'Speed 2',
        plot: 'Annie is looking forward to a Caribbean cruise with her cop boyfriend, Alex , who purchased the tickets to make up for lying about working on the SWAT team.',
        imageLink: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/df7bf8e79b095f3dedd2d47902de322d_a11d8ae2-c398-440e-9914-73f56461e579_480x.progressive.jpg?v=1573592530",
        director: 'Jan De Bont',
        movieRating: 'PG-13',
        year: 1997,
        duration: '2h 1m',
        genreId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: '99 and 44/100 Percent Dead',
        plot: 'In an unnamed city, a violent turf war has broken out between a pair of gang bosses: Big Eddie and Uncle Frank ', imageLink: "https://i.ytimg.com/vi/dtH7TrKJTyA/hqdefault.jpg",
        director: 'John Frankenheimer',
        movieRating: 'PG',
        year: 1974,
        duration: '1h 38m',
        genreId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: 'Live Free or Die',
        plot: 'John "Rugged" Rudgate  is a petty criminal who is as cowardly as they come, but he would like the residents of his backwoods New Hampshire community to believe otherwise',
        imageLink: "https://m.media-amazon.com/images/M/MV5BMTIxNjYzNjU1M15BMl5BanBnXkFtZTYwMDIzNTc3._V1_.jpg",
        director: 'Gregg Kavet, Andy Robin',
        movieRating: 'R',
        year: 2006,
        duration: '1h 29m',
        genreId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: 'High School Big Shot',
        plot: 'A teenager turns to a life of crime after a pretty student (Virginia Aldridge) leads to his downfall at school.', imageLink: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/8979c61987b8fed65c2748a691995430_08aaafed-cd74-42e4-864a-0f56fe7508e2_480x.progressive.jpg?v=1573587253",
        director: 'Joel Rapp',
        movieRating: 'Not Rated',
        year: 1959,
        duration: '1h 10m',
        genreId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: 'The Underclassman',
        plot: 'Thanks to his boyish appearance, young cop Tre Stokes scores an undercover assignment at a California high school in order to break up a stolen-car ring.',
        imageLink: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/915169df9cd0422cf53c405d12a025cf_98c5dd75-5690-4ba0-89eb-f3c5d15b980c_480x.progressive.jpg?v=1573613787",
        director: 'Marcos Siega',
        movieRating: 'PG-13',
        year: 2005,
        duration: '1h 35m',
        genreId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: 'The Specialist',
        plot: 'Former CIA demolition expert Ray Quick (Sylvester Stallone) lives in Miami, where he works as a hit man. May Munro (Sharon Stone) contacts Ray to kill a family of mobsters led by Tom Leon and his son  who murdered May parents 20 years ago.', imageLink: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/specialist.af_500x749.jpg?v=1621271956",
        director: 'Luis Llosa',
        movieRating: 'R',
        year: 1994,
        duration: '1h 50m',
        genreId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: 'Roseanna',
        plot: ' the story of a working-class family struggling with lifes essential problems - marriage, children, money, and parents-in-law',
        imageLink: "https://m.media-amazon.com/images/M/MV5BZThkMmYxMGUtYmY0YS00MmE3LTg2OWQtOWIxYWYxODdjY2VlXkEyXkFqcGdeQXVyNTA2NDc4OA@@._V1_.jpg",
        director: 'Hans Abramson',
        movieRating: 'Not Rated',
        year: 1967,
        duration: '1h 44m',
        genreId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: 'Little Man',
        plot: 'Calvin, a short and tiny criminal, has just committed a robbery involving stealing a precious diamond from a jewellery store along with his dim-witted partner, Percy',
        imageLink: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/d284c4da35c05f1de917b0d0aaf3e0ea_9e1efe37-3bb2-4a77-9aa1-918ab0c11752_500x749.jpg?v=1573592822",
        director: 'Keenen Ivory Wayans',
        movieRating: 'PG-13',
        year: 2006,
        duration: '1h 38m',
        genreId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
    }

   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Movies', null, {});
  }
};
