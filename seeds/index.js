const seedPosts = require("../seeds/post-seeds");
const seedUsers = require("../seeds/user-seeds");
const seedComments = require("../seeds/comment-seeds");
const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedUsers();
  await seedPosts();
  await seedComments();
  process.exit(0);
};

seedAll();
