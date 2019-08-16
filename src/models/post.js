module.exports = (sequelize, type) => {
    return sequelize.define('post', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncremenet: true
        },
        authorName: type.STRING,
        authorEmail: type.STRING,
        authorWebsite: type.STRING,
        comment: type.STRING
    });
}