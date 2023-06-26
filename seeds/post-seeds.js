const { Post } = require("../models");

const postData = [
  {
    title: "Techblog_MVC is live!",
    post_content: "Techblog_MVC is ready for use.",
    user_id: 3,
  },
  {
    title: "Zoo Keepr reaches 1 million subscribers!",
    post_content:
      "Coter is the newest blogstyle application used for users to post helpful tips and other information to help new and experienced tech experts alike!",
    user_id: 1,
  },
  {
    title: "Password Generator",
    post_content:
      "This password generator is available for use for creating a random password for users",
    user_id: 2,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
