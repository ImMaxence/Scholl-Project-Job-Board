const bdd = require('../models/bdd.js')



exports.peopleGetAllExceptPassword = (request, response) => {
    var requestGet = ''
    if (request.query.id != undefined) {
        requestGet = requestGet + ' AND id = "' + request.query.id.replaceAll("'", "''") + '"'
    }
    if (request.query.lastname != undefined) {
        requestGet = requestGet + ' AND lastname = "' + request.query.lastname.replaceAll("'", "''") + '"'
    }
    if (request.query.firstname != undefined) {
        requestGet = requestGet + ' AND firstname = "' + request.query.firstname.replaceAll("'", "''") + '"'
    }
    if (request.query.email != undefined) {
        requestGet = requestGet + ' AND email = "' + request.query.email.replaceAll("'", "''") + '"'
    }
    if (request.query.username != undefined) {
        requestGet = requestGet + ' AND username = "' + request.query.username.replaceAll("'", "''") + '"'
    }
    if (request.query.isAdmin != undefined) {
        requestGet = requestGet + ' AND isAdmin = "' + request.query.isAdmin.replaceAll("'", "''") + '"'
    }
    if (requestGet != '') {
        bdd.bddSelect("SELECT id, lastname, firstname, birthDate, pictureDataPeople, email, username, isAdmin FROM people WHERE 1 = 1 " + requestGet + ";", (responseBDD) => {
            response.status(200)
            response.send(responseBDD)
        })
    }
    else {
        bdd.bddSelect("SELECT id, lastname, firstname, birthDate, pictureDataPeople, email, username, isAdmin FROM people WHERE 1 = 1;", (responseBDD) => {
            response.status(200)
            response.send(responseBDD)
        })
    }
}

exports.peoplePostPassword = (request, response) => {
    try {
        email = ''
        if (request.body.email != undefined) {
            email = ' email = "' + request.body.email.replaceAll("'", "''") + '"'
        }
        if (email != '') {
            bdd.bddSelect("SELECT id, password, isAdmin FROM people WHERE " + email + ";", (responseBDD) => {
                response.send(responseBDD)
            })
        }
        else {
            response.status(400)
            response.send('error')
        }
    }
    catch (error) {
        response.status(400)
        response.send(error)
    }
}

exports.peoplePostInsert = (request, response) => {
    try {
        var lastname = ''
        var firstname = ''
        var pictureDataPeople = ''
        var email = ''
        var username = ''
        var password = ''
        if (request.body.lastname != undefined) {
            var lastname = request.body.lastname.replaceAll("'", "''")
        }
        if (request.body.firstname != undefined) {
            var firstname = request.body.firstname.replaceAll("'", "''")
        }
        if (request.body.birthDate != undefined) {
            var birthDate = request.body.birthDate.replaceAll("'", "''")
        }
        if (request.body.pictureDataPeople != undefined) {
            var pictureDataPeople = request.body.pictureDataPeople.replaceAll("'", "''")
        }
        if (request.body.email != undefined) {
            var email = request.body.email.replaceAll("'", "''")
        }
        if (request.body.username != undefined) {
            var username = request.body.username.replaceAll("'", "''")
        }
        if (request.body.password != undefined) {
            var password = request.body.password.replaceAll("'", "''")
        }
        var isAdmin = '0'
        bdd.bddInsert("INSERT INTO people (id, lastname, firstname, birthDate, pictureDataPeople, email, username, password, isAdmin) VALUES (NULL, '" + lastname + "', '" + firstname + "', '" + birthDate + "', '" + pictureDataPeople + "', '" + email + "', '" + username + "', '" + password + "', '" + isAdmin + "');", (responseBDD) => {
            response.status(200)
            response.send(responseBDD)
        })
    }
    catch (error) {
        response.status(400)
        response.send(error)
    }
}

exports.peopleDelete = (request, response) => {
    try {
        var id = ''
        if (request.params.id != undefined) {
            var id = request.params.id.replaceAll("'", "''")
        }
        bdd.bddDelete("DELETE FROM people WHERE id='" + id + "';", (responseBDD) => {
            response.status(200)
            response.send(responseBDD)
        })
    }
    catch (error) {
        response.status(400)
        response.send(error)
    }
}

exports.peoplePut = (request, response) => {
    try {
        var id = ''
        var modif = ''
        if (request.params.id != undefined) {
            var id = request.params.id.replaceAll("'", "''")
        }
        if (request.body.lastname != undefined) {
            var modif = modif + ", lastname = '" + request.body.lastname.replaceAll("'", "''") + "' "
        }
        if (request.body.firstname != undefined) {
            var modif = modif + ", firstname = '" + request.body.firstname.replaceAll("'", "''") + "' "
        }
        if (request.body.birthDate != undefined) {
            var modif = modif + ", birthDate = '" + request.body.birthDate.replaceAll("'", "''") + "' "
        }
        if (request.body.pictureDataPeople != undefined) {
            var modif = modif + ", pictureDataPeople = '" + request.body.pictureDataPeople.replaceAll("'", "''") + "' "
        }
        if (request.body.email != undefined) {
            var modif = modif + ", email = '" + request.body.email.replaceAll("'", "''") + "' "
        }
        if (request.body.pictureDataPeople != undefined) {
            var modif = modif + ", pictureDataPeople = '" + request.body.pictureDataPeople.replaceAll("'", "''") + "' "
        }
        if (request.body.username != undefined) {
            var modif = modif + ", username = '" + request.body.username.replaceAll("'", "''") + "' "
        }
        if (request.body.password != undefined) {
            var modif = modif + ", password = '" + request.body.password.replaceAll("'", "''") + "' "
        }
        if (request.body.isAdmin != undefined) {
            var modif = modif + ", isAdmin = '" + request.body.isAdmin.replaceAll("'", "''") + "' "
        }
        bdd.bddEdit("UPDATE people SET id = '" + id + "'" + modif + " WHERE id = " + id + ";", (responseBDD) => {
            response.status(200)
            response.send(responseBDD)
        })
    }
    catch (error) {
        response.status(400)
        response.send(error)
    }
}