const { User } = require("../models");

const userData = [
  {
    username: "Andythepee",
    password: "Andrewp",
  },
  {
    username: "Rudri",
    password: "Joshi",
  },
  {
    username: "Milad",
    password: "Mahdi",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
