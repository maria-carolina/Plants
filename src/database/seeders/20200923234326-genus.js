module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('genus', [{
        name: 'Helianthus',
      },{ 
        name: 'Bromélia'
      },{ 
        name: 'Graptopetalum'
      },{
        name: 'Anthemideae'
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
