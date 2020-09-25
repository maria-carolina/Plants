module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('plants', [{
        name: 'Girassol',
        scientific_name: 'Helianthus annuus',
        genus_id: 1
      },{
        name: 'Gravatá',
        scientific_name: 'Bromelia antiacantha',
        genus_id: 2
      },{
        name: 'Planta Fantasma',
        scientific_name: 'Graptopetalum paraguayense',
        genus_id: 3
      },{
        name: 'Crisântemo',
        scientific_name: 'Chrysanthemum',
        genus_id: 4
      }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
