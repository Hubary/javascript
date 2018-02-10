var dataManager = require('./data-manager')
var url = require('./url-generator')

var utils = {
    sendData: function(res, data, code) {
        res.send({
            code: code || 200,
            data: data
        })
    },
    parsePerson: function(body) {
        return {
            name: body.name,
            age: body.age,
            gender: body.gender,
            email: body.email
        }
    }
}
console.info('backend.js');
module.exports = {

    setup: function(app) {
        console.info('backend.js Setup');
        app.post(url('all-persons'), function(req, res) {
            console.info('backend.js Setup post');
            utils.sendData(res, dataManager.getAllPersons())
        })

        app.post(url('remove-person'), function(req, res) {
            var result = dataManager.removePerson(req.body.id)
            utils.sendData(res,
                result ? {} : {error: 'Cannot find person to remove.'},
                result ? 200 : 500
            )
        })

        app.post(url('add-person'), function(req, res) {
            var body = req.body

            utils.sendData(res, dataManager.addPerson(utils.parsePerson(body)))
        })

        app.post(url('edit-person'), function(req, res) {
            var body = req.body

            var result = dataManager.editPerson(body.id, utils.parsePerson(body))
            utils.sendData(res,
                result ? {} : {error: 'Cannot edit the person because he/she is not found in the list.'},
                result ? 200 : 500
            )
        })
    }
}