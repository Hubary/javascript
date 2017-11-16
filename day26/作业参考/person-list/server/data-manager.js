var fs = require('fs')
var npath = require('path')

var DATA_PATH = npath.join(__dirname, 'persons.json')

var dataManager = (function(dataPath) {
    var innerDataManager = {

        /**
         * 确保data文件存在, 如果不存在, 则用初始化数据去初始化这个文件
         */
        ensureDataFile: function() {
            if (!fs.existsSync(dataPath)) {
                fs.writeFileSync(dataPath, JSON.stringify({
                    persons: [
                        {
                            id: 1,
                            name: 'James Bond',
                            age: 30,
                            gender: 'm',
                            email: 'james.bond@secretagent.com'
                        },
                        {
                            id: 2,
                            name: 'Angelina Jolie',
                            age: 40,
                            gender: 'f',
                            email: 'i-dont-tell-anyone@somewhere.com'
                        }
                    ],
                    idSeq: 3
                }))
            }
        },

        /**
         * 尝试读取 data 文件的数据, 如果出错 (如json格式问题), 则返回空文件
         * @returns {*}
         */
        readData: function() {
            innerDataManager.ensureDataFile()
            var data = null
            try {
                data = JSON.parse(fs.readFileSync(dataPath).toString())
            } catch (ex) { }
            data = data || {persons: [{
                        id: 1,
                        name: 'James Bond',
                        age: 30,
                        gender: 'm',
                        email: 'james.bond@secretagent.com'
                    },
                    {
                        id: 2,
                        name: 'Angelina Jolie',
                        age: 40,
                        gender: 'f',
                        email: 'i-dont-tell-anyone@somewhere.com'
                    }], idSeq: 3}
            return data
        },

        /**
         * 将数据写入 data 文件
         * @param data
         */
        writeData: function(data) {
            innerDataManager.ensureDataFile()
            fs.writeFileSync(dataPath, JSON.stringify(data))
        },

        /**
         * 返回所有的人
         *
         * @returns {Array}
         */
        getAllPersons: function() {
            var data = innerDataManager.readData()
            return data.persons
        },

        /**
         * 根据id, 找到特定的人, 处理并返回 callback 的处理结果
         *
         * 如果找到相应的人, 则调用:
         * callback ( person, index, persons )
         *
         * 如果最后没有找到任何匹配id的人, 则调用:
         * callback ( false )
         *
         * @param id
         */
        processPersonById: function(id, callback) {
            var data = innerDataManager.readData()
            var persons = data.persons
            var len = persons && persons.length

            //console.log('id', id, 'persons', persons)
            for (var i = len; i-- > 0;) {
                if (persons[i].id === Number(id)) {
                    return callback(persons[i], i, persons, data)
                }
            }
            return callback(false)
        },

        /**
         * 尝试删除某个人的记录, 如果没找到这个人则返回false, 删除成功返回true
         *
         * @param id
         * @returns {*}
         */
        removePerson: function(id) {
            return innerDataManager.processPersonById(id, function(person, index, persons, data) {
                console.log('edit args', arguments)
                if (person) {
                    persons.splice(index, 1)
                    innerDataManager.writeData(data)
                    return true
                }
                return false
            })
        },

        /**
         * 新增一个人, 每次利用idSeq自增1, 作为id
         *
         * @param person
         */
        addPerson: function(person) {
            var data = innerDataManager.readData()
            data.persons.push({
                id: data.idSeq ++,
                name: person.name,
                age: person.age,
                gender: person.gender,
                email: person.email
            })
            //console.log('person added ', data)
            innerDataManager.writeData(data)
        },

        /**
         * 使用传过来的数据进行编辑, 如果没找到这个人, 则返回false, 编辑成功返回true
         *
         * @param newPerson
         * @returns {*}
         */
        editPerson: function(id, newPerson) {
            return innerDataManager.processPersonById(id, function(person, index, persons, data) {
                if (person) {
                    console.log('person edited ', data)
                    person.name = newPerson.name
                    person.age = newPerson.age
                    person.gender = newPerson.gender
                    person.email = newPerson.email
                    innerDataManager.writeData(data)
                    return true
                }

                return false
            })
        }

    }

    return innerDataManager;
})(DATA_PATH)

module.exports = dataManager