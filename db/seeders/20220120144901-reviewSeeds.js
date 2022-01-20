'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Reviews', [
     {
      title: 'A perfect Ryan Reynolds movie!',
      content: 'My expectations for this movie were already high when I saw the cast and R rating. It seemed like a dream-come-true to true to any of us comic book nerds. It managed to be a "hero" (or villain?) movie, while maintaining a very comedic mood throughout. This is a must watch! Be prepared for many laughs and baby limbs.',
      movieId: 7,
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      title: 'There are no words...',
      content: 'I must give props to the movie team for finding a group of individuals who would agree to act in such a disgusting film. There is nothing to keep a user engaged, as the plot and acting is quite bad. Now those actors have to live every day knowing that they filmed an entire movie with their mouth to another persons butt.',
      movieId: 29,
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Such a heartbreaking masterpiece',
      content: 'After hearing some mixed reviews on this movie, I decided I needed to give it a watch. All I can say is "wow". To anyone who thinks this movie is bad, you probably think The Human Centipede is good. Although it is spectacular, there are rather creepy parts. I will leave that to the viewer.',
      movieId: 17,
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'I shut it off after 2 hours',
      content: 'The movie is too dramatic, and FAR TOO LONG. If I wanted 4 hours of romance, I would just watch The Notebook twice.',
      movieId: 16,
      userId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Most romantic thing I have ever seen!',
      content: 'This movie made me cry at least 3 times. It is a must watch!',
      movieId: 16,
      userId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Beautifully constructed!',
      content: 'This is a perfect romance film! The fashion is inspirational. Scarlett O\'Hara does a fantastic job throughout!',
      movieId: 16,
      userId: 2,
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
   return queryInterface.bulkDelete('Reviews', null, {});
  }
};
