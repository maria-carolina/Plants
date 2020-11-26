const Plant = require('../models/Plant')
const User = require('../models/User');
const multer = require('multer');

module.exports = {
    async index(req,res) {
        const plants = await Plant.findAll();
        
        return res.json(plants);
    },

    async store(req, res) {
        const { name, scientific_name, genus } = req.body;

        const plant = await Plant.create({ name, scientific_name, genus_id: genus });

        if(!plant) {
            return res.status(404).json({ error: 'Erro ao gravar planta' });
        }

        return res.json(plant);
    }, 

    async storeImage(req, res) {
        const { plantId } = req.params;
        const { filename: key} = req.file;

        const plant = await Plant.update({ 
            image: key 
        },{ 
            where: { id: plantId }
        });

          return res.send({ message: "Imagem inserida com sucesso" })
    
    },

    async show(req, res) {
        const { plantId } = req.params;
        const plant = await Plant.findByPk(plantId);

        if(!plant) {
            return res.status(404).json({ error: 'Planta não encontrada' });
        }

        return res.json(plant);
    },
    
    async delete(req, res){
        const { plantId } = req.params;

        await Plant.destroy({
             where: { id: plantId } 
          });

        return res.json({ message: "Planta removida" })

    },

    async update(req, res){

        const { name, scientific_name, genus_id: genus } = req.body;
        const { plantId } = req.params;

        const plant = await Plant.update({ 
            name, scientific_name, genus
        },{
             where: { id: plantId } 
          });

          return res.send({ message: "Planta alterada" })
    },

    async indexAuth(req, res) {
        const user = await User.findByPk(req.userId);
        return res.send({message: 'User: ' + user.name + ' autendicado'});
    }

}