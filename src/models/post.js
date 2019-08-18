module.exports = (sequelize, Sequelize) => {
    return sequelize.define('post', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        authorName: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        authorEmail: {
            type: Sequelize.STRING,
            allowNull: true,
            validate: {
                isEmail: true
            }
        },
        authorWebsite: {
            type: Sequelize.STRING,
            allowNull: true,
            validate: {
                isUrl: true
            }
        },
        comment: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });
};