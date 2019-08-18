const Sequelize = require('sequelize');
const PostModel = require('./models/post');

// As this is just a toy app, using root:root MySQL user locally.
// Will update this to pull from environment variables later.
const sequelize = new Sequelize('node_guestbook', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const Post = PostModel(sequelize, Sequelize);

// Setting force to true wipes out and rebuilds the tables each time
sequelize.sync({ force: false });

module.exports = {
    Post
};