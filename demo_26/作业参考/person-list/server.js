var npath = require('path')
var express = require('express')
var bodyParser = require('body-parser')

var backend = require('./server/backend')

var app = express()

var appConfig = {
    port: 8123
}

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use('/', express.static(npath.join(__dirname, 'static'), {
    index: 'index.html'
}))

// 请忽略这一个定义
app.use('/test-dev', express.static(npath.normalize(npath.join(__dirname, '..', 'person-list-test-dev'))))

backend.setup(app)

app.listen(appConfig.port, function(err) {
    if (err) {
        console.error(err)
    } else {
        console.info('Server started on http://localhost:%s', appConfig.port)
    }
})