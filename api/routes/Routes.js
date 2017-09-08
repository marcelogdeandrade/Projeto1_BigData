module.exports = function (app) {
  var Species = require('../controllers/Species/ControllerSpecies');
  var Pets = require('../controllers/Pets/ControllerPets');
  var Medicines = require('../controllers/Medicines/ControllerMedicines');

  // todoList Routes
  app.route('/species')
    .get(Species.list_all_species)
    .post(Species.add_species)
    .delete(Species.remove_species)
    .put(Species.update_species)

  app.route('/pets')
    .get(Pets.list_all_pets)
    .post(Pets.add_pet)
    .put(Pets.update_pet)
    .delete(Pets.remove_pet)

  app.route('/medicines')
    .get(Medicines.list_all_medicines)
    .post(Medicines.add_medicine)
    .delete(Medicines.remove_medicine)
    .put(Medicines.update_medicine)
};
