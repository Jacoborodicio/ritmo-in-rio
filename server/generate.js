var faker = require('faker');

var database = { posts: []};

for (var i = 1; i<= 300; i++) {
  database.posts.push({
    id: i,
    title: faker.random.words(3),
    userName: `${faker.name.firstName()} ${faker.name.lastName()}`,
    description: faker.lorem.sentences(),
    email: faker.internet.email(),
    imageUrl: faker.image.imageURL,
    likes: faker.random.number()
  });
}

console.log(JSON.stringify(database));
