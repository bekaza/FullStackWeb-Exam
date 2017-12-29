
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        email: DataTypes.STRING,
        gender: DataTypes.STRING,
        age: DataTypes.INTEGER
    }, {
        timestamps: false,
        tableName: 'users'
    })

    User.associate = function (models) {
    }

    return User
}
