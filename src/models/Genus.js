const { Model, DataTypes } = require('sequelize');

class Genus extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING
        },{
            sequelize,
            tableName: 'genus'
        })
    }
    static associate(models){
        this.hasMany(models.Plant, { foreignKey: 'genus_id', as: 'genus' });
    }
}

module.exports = Genus;