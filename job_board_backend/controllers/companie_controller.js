const bdd = require('../models/bdd.js')



exports.companieGetAllExceptPassword = (request, response) => {
    try {
        var requestGet = ''
        if (request.query.id != undefined) {
            requestGet = requestGet + ' AND id = "' + request.query.id.replaceAll("'", "''") + '"'
        }
        if (request.query.email != undefined) {
            requestGet = requestGet + ' AND email = "' + request.query.email.replaceAll("'", "''") + '"'
        }
        if (request.query.username != undefined) {
            requestGet = requestGet + ' AND username = "' + request.query.username.replaceAll("'", "''") + '"'
        }
        if (requestGet != '') {
            bdd.bddSelect("SELECT id, email, username, pictureDataCompanie FROM companie WHERE 1 = 1 " + requestGet + ";", (resp) => {
                response.send(resp)
            })
        }
        else {
            bdd.bddSelect("SELECT id, email, username, pictureDataCompanie FROM companie WHERE 1 = 1;", (resp) => {
                response.send(resp)
            })
        }
    }
    catch (error) {
        response.status(400)
        response.send(error)
    }
}
exports.companiePostInsert = (request, response) => {
    try {
        var pictureDataCompanie = ''
        var email = ''
        var username = ''
        var password = ''
        if (request.body.pictureDataCompanie != undefined) {
            var pictureDataCompanie = request.body.pictureDataCompanie.replaceAll("'", "''")
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
        bdd.bddInsert("INSERT INTO companie (id, email, username, password, pictureDataCompanie) VALUES (NULL, '" + email + "', '" + username + "', '" + password + "', '" + pictureDataCompanie + "');", (resp) => {
            response.send(resp)
        })
    }
    catch (error) {
        response.status(400)
        response.send(error)
    }
}

exports.companiePostPassword = (request, response) => {
    try {
        var email = ''
        if (request.body.email != undefined) {
            email = ' email = "' + request.body.email.replaceAll("'", "''") + '"'
        }
        if (email != '') {
            bdd.bddSelect("SELECT id, password FROM companie WHERE " + email + ";", (resp) => {
                response.send(resp)
            })
        }
    }
    catch (error) {
        response.status(400)
        response.send(error)
    }
}
exports.companieDelete = (request, response) => {
    try {
        var id = ''
        if (request.params.id != undefined) {
            var id = request.params.id.replaceAll("'", "''")
        }
        bdd.bddDelete("DELETE FROM companie WHERE id='" + id + "';", (resp) => {
            response.send(resp)
        })
    }
    catch (error) {
        response.status(400)
        response.send(error)
    }
}
exports.companiePut = (request, response) => {
    try {
        var id = ''
        var modif = ''
        if (request.params.id != undefined) {
            var id = request.params.id.replaceAll("'", "''")
        }
        if (request.body.email != undefined) {
            var modif = modif + ", email = '" + request.body.email.replaceAll("'", "''") + "' "
        }
        if (request.body.username != undefined) {
            var modif = modif + ", username = '" + request.body.username.replaceAll("'", "''") + "' "
        }
        if (request.body.password != undefined) {
            var modif = modif + ", password = '" + request.body.password.replaceAll("'", "''") + "' "
        }
        if (request.body.pictureDataCompanie != undefined) {
            var modif = modif + ", pictureDataCompanie = '" + request.body.pictureDataCompanie.replaceAll("'", "''") + "' "
        }
        if (request.body.logo != undefined) {
            var modif = modif + ", logo = '" + request.body.logo.replaceAll("'", "''") + "' "
        }
        bdd.bddEdit("UPDATE companie SET id = '" + id + "'" + modif + " WHERE id = " + id + ";", (resp) => {
            response.send(resp)
        })
    }
    catch (error) {
        response.status(400)
        response.send(error)
    }
}
