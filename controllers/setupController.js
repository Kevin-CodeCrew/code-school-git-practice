const Todos = require('../models/todoModel.js');

module.exports = function (app) {
    app.get('/api/setupTodos', function (req, res) {
            const starterTodos = [
                {
                    username: 'kyancy',
                    todo: 'Get new Students with bettwer manners',
                    isDone: false

                },
                {
                    username: 'kyancy',
                    todo: 'Get Milk',
                    isDone: false
                },
                {
                    username: 'kyancy',
                    todo: 'Clean my room',
                    isDone: false

                }
            ];

            Todos.create(starterTodos, function (err, results) {

                    res.send(results);
                }
            )
        }
    )


};