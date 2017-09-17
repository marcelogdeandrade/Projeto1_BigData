module.exports = function (app) {
  var Species = require('../controllers/Species/ControllerSpecies');
  var Pets = require('../controllers/Pets/ControllerPets');
  var Medicines = require('../controllers/Medicines/ControllerMedicines');
  var RelMecidinesPets = require('../controllers/RelMedicinesPets/ControllerRelMedicinesPets');
  var Illnesses = require('../controllers/Illnesses/ControllerIllnesses');
  var RelIllnessesPets = require('../controllers/RelIllnessesPets/ControllerRelIllnessPets');
  var Clients = require('../controllers/Clients/ControllerClients');
  var Foods = require('../controllers/Foods/ControllerFoods');
  var Foodlog = require('../controllers/FoodLog/ControllerFoodLog');
  
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

  app.route('/relpetsmedicines')
    .get(RelMecidinesPets.list_all_relations_pets_medicines)
    .post(RelMecidinesPets.add_relation_pet_medicine)
    .delete(RelMecidinesPets.remove_relation_pet_medicine)
    .put(RelMecidinesPets.update_relation_pet_medicine)

  app.route('/illnesses')
    .get(Illnesses.list_all_illnesses)
    .post(Illnesses.add_illness)
    .delete(Illnesses.remove_illness)
    .put(Illnesses.update_illness)

  app.route('/relillnessespets')
    .get(RelIllnessesPets.list_all_relations_illness_pets)
    .post(RelIllnessesPets.add_relation_ilness_pet)
    .delete(RelIllnessesPets.remove_relation_ilness_pet)
    .put(RelIllnessesPets.update_relation_ilness_pet)

  app.route('/clients')
    .get(Clients.list_all_clients)
    .post(Clients.add_client)
    .delete(Clients.remove_client)
    .put(Clients.update_client)

  app.route('/foods')
    .get(Foods.list_all_foods)
    .post(Foods.add_food)
    .delete(Foods.remove_food)
    .put(Foods.update_food)

  app.route('/foodlog')
    .get(Foodlog.list_all_foodlog)
    .post(Foodlog.add_foodlog)
    .delete(Foodlog.remove_foodlog)
    .put(Foodlog.update_foodlog)
};
