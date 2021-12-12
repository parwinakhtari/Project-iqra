module.exports = (sequelize, DataTypes) => {
    const Session = sequelize.define('Session', {
        title: DataTypes.STRING,
        author: DataTypes.STRING,
        topic: DataTypes.STRING,
        date: DataTypes.STRING,
        meetlink: DataTypes.STRING
    })
    return Session
}
