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
      plot: 'In Jumanji: The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world\'s most dangerous.' ,
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
      plot: 'A reclusive romance novelist on a book tour with her cover model gets swept up in a kidnapping attempt that lands them both in a cutthroat jungle adventure.' ,
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
      title: 'Marry Me',
      plot: 'Music superstars Kat Valdez and Bastian are getting married before a global audience of fans. But when Kat learns, seconds before her vows, that Bastian has been unfaithful, she decides to marry Charlie, a stranger in the crowd, instead.' ,
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
      imageLink: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/deadpool_64ebcd47_480x.progressive.jpg", // from movieposters.com site in discord channel
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
      plot: 'Scott has been a case of arrested development since his firefighter dad died. He spends his days smoking weed and dreaming of being a tattoo artist until events force him to grapple with his grief and take his first steps forward in life.' ,
      imageLink: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/kingofstaten_480x.progressive.jpg", // from movieposters.com site in discord channel
      director: 'Judd Apatow',
      movieRating: 'R',
      year: 2020,
      duration: '2h 16m',
      genreId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
  },
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
