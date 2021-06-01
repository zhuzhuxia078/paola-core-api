const faker = require('faker');
// const SQL = require('sequelize');

const db = require('./index.js');
// const Rating = require('./models/rating.js');

const seedDB = async function() {
  const ratings = [];
  // const reviews = [];
  const roomIds = [];
  let rating, review;

  for (let i = 0; i < 100; i++) {
    roomIds.push(faker.random.number({min: 11111111, max: 99999999}));
  }

  for (let i = 0; i < 5000; i++) {
    rating = {
      roomId: faker.random.arrayElement(roomIds),
      ratingCheckIn: faker.finance.amount(1, 5, 1),
      ratingAccuracy: faker.finance.amount(1, 5, 1),
      ratingLocation: faker.finance.amount(1, 5, 1),
      ratingCommunication: faker.finance.amount(1, 5, 1),
      ratingCleanliness: faker.finance.amount(1, 5, 1),
      ratingValue: faker.finance.amount(1, 5, 1),
    };

    // review = {
    //   roomId: faker.random.arrayElement(roomIds),
    //   username: faker.name.firstName(),
    //   userAvatarURL: faker.image.avatar(),
    //   comment: faker.lorem.paragraphs(faker.random.number({min: 1, max: 3})),
    //   createdAt: faker.date.past(5, '2019-11-23'),
    // };

    ratings.push(rating);
    // reviews.push(review);
  }

  try {
    const connection = await db.connect();
    const { Rating } = connection;

    await Rating.destroy({
      where: {},
      truncate: true
    });
    console.log('Ratings table cleared.');

    await Rating.bulkCreate(ratings);
    console.log('Ratings table seeded successfully.');

    console.log('Database seeding complete.');
  } catch (err) {
    console.log(`Error while seeding database: ${err}`);
  }

  return;
};

seedDB().then(() => process.exit(0));

// module.exports = seedDB;
