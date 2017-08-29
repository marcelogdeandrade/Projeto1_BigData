module.exports = function (app) {
  var todoList = require('../controllers/Controller');

  // todoList Routes
  app.route('/species')
    .get(todoList.list_all_species)
    .post(todoList.add_specie)
    .delete(todoList.remove_species)
};
