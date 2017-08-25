module.exports = function (app) {
  var todoList = require('../controllers/Controller');

  // todoList Routes
  app.route('/get_dogs')
    .get(todoList.list_all_dogs)
    .post(todoList.add_dog)
};