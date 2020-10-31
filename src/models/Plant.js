const { Model, DataTypes } = require('sequelize');

class Plant extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            scientific_name: DataTypes.STRING,
            image: DataTypes.STRING
        },{
            sequelize,
            tableName: 'plants'
        })
    }
    static associate(models){
        this.belongsTo(models.Genus, { foreignKey: 'genus_id', as: 'plant' })
    }
}

module.exports = Plant;