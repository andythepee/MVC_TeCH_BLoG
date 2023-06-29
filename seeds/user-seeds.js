const { User } = require("../../MVC_TeCH_BLoG/models");

const userData = [
  {
    username: "andy_p",
    password: "Password1",
  },
  {
    username: "mahdi_s",
    password: "Password2",
  },
  {
    username: "rudri_j",
    password: "Password3",
  },
  {
    username: "tony_r",
    password: "Password4",
  },
  {
    username: "tony_l",
    password: "Password5",
  },
  {
    username: "john_s",
    password: "Password6",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
