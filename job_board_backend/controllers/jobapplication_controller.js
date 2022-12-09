const bdd = require('../models/bdd.js')

exports.jobapplicationSelectAll = (request, response) => {
    try {
        var requestGet = ''
            if (request.query.jobApplicationId != undefined) {
                requestGet = requestGet + ' AND jobapplication.id = "' + request.query.jobApplicationId.replaceAll("'","''") + '"'
            } 
            if (request.query.companieId != undefined) {
                requestGet = requestGet + ' AND companie.id = "' + request.query.companieId.replaceAll("'","''") + '"'
            } 
            if (request.query.companieUsername != undefined) {
                requestGet = requestGet + ' AND companie.username = "' + request.query.companieUsername.replaceAll("'","''") + '"'
            } 
            if (request.query.companieEmail != undefined) {
                requestGet = requestGet + ' AND companie.email = "' + request.query.companieEmail.replaceAll("'","''") + '"'
            } 
            if (request.query.peopleId != undefined) {
                requestGet = requestGet + ' AND people.id = "' + request.query.peopleId.replaceAll("'","''") + '"'
            } 
            if (request.query.peopleEmail != undefined) {
                requestGet = requestGet + ' AND people.email = "' + request.query.peopleEmail.replaceAll("'","''") + '"'
            } 
            if (request.query.peopleUsername != undefined) {
                requestGet = requestGet + ' AND people.username = "' + request.query.peopleUsername.replaceAll("'","''") + '"'
            } 
            if (request.query.peopleLastname != undefined) {
                requestGet = requestGet + ' AND people.lastname = "' + request.query.peopleLastname.replaceAll("'","''") + '"'
            } 
            if (request.query.peopleFirstname != undefined) {
                requestGet = requestGet + ' AND people.firstname = "' + request.query.peopleFirstname.replaceAll("'","''") + '"'
            } 
            if (requestGet != '') {
                bdd.bddSelect("SELECT jobapplication.id, jobapplication.createdDate, jobapplication.motivationLetter, people.lastname, people.firstname, people.pictureDataPeople, companie.username, companie.pictureDataCompanie, advertisement.title, advertisement.location, advertisement.salarie, advertisement.type, advertisement.isActive, advertisement.isRemote, advertisement.qualificationRequired, advertisement.pictureDataAdvertisement, advertisement.description FROM jobapplication, people, advertisement, companie WHERE advertisement.companieId = companie.id AND jobapplication.advertisementId = advertisement.id AND jobapplication.peopleId = people.id " + requestGet + ";", (resp) => {
                response.send(resp)
            })
            }
            else {
                bdd.bddSelect("SELECT jobapplication.id, jobapplication.createdDate, jobapplication.motivationLetter, people.lastname, people.firstname, people.pictureDataPeople, companie.username, companie.pictureDataCompanie, advertisement.title, advertisement.location, advertisement.salarie, advertisement.type, advertisement.isActive, advertisement.isRemote, advertisement.qualificationRequired, advertisement.pictureDataAdvertisement, advertisement.description FROM jobapplication, people, advertisement, companie WHERE advertisement.companieId = companie.id AND jobapplication.advertisementId = advertisement.id AND jobapplication.peopleId = people.id;", (resp) => {
                    response.send(resp)
                })
            }
        }
    catch (error){
        response.status(400)
        response.send(error)
    }
}
exports.jobapplicationInsert = (request, response) => {
    try {
        var createdDate = ''
        var motivationLetter = ''
        var advertisementId = ''
        var peopleId = ''
        if (request.body.createdDate != undefined) {
            var createdDate = request.body.createdDate.replaceAll("'","''")
        }
        if (request.body.motivationLetter != undefined) {
            var motivationLetter = request.body.motivationLetter.replaceAll("'","''")
        }
        if (request.body.advertisementId != undefined) {
            var advertisementId = request.body.advertisementId.replaceAll("'","''")
        }
        if (request.body.peopleId != undefined) {
            var peopleId = request.body.peopleId.replaceAll("'","''")
        }
        bdd.bddInsert("INSERT INTO jobapplication (id, advertisementId, peopleId, createdDate, motivationLetter) VALUES (NULL, '" + advertisementId + "', '" + peopleId + "', '" + createdDate + "', '" + motivationLetter + "');", (resp) => {
            response.send(resp)
        })
    }
    catch (error){
        response.status(400)
        response.send(error)
    }
}
exports.jobapplicationDelete = (request, response) => {
    try {
        var id = ''
        if (request.params.id != undefined) {
            var id = request.params.id.replaceAll("'","''")
        }
        bdd.bddDelete("DELETE FROM jobapplication WHERE id='" + id + "';", (resp) => {
            response.send(resp)
        })
    }
    catch (error){
        response.status(400)
        response.send(error)
    }
}
exports.jobapplicationPut = (request, response) => {
    try {
        var id = ''
        var modif = ''
        if (request.params.id != undefined) {
            var id = request.params.id.replaceAll("'","''")
        }
        if (request.body.advertisementId != undefined) {
            var modif = modif + ", advertisementId = '" + request.body.advertisementId.replaceAll("'","''") + "' "
        }
        if (request.body.peopleId != undefined) {
            var modif = modif + ", peopleId = '" + request.body.peopleId.replaceAll("'","''") + "' "
        }
        if (request.body.createdDate != undefined) {
            var modif = modif + ", createdDate = '" + request.body.createdDate.replaceAll("'","''") + "' "
        }
        if (request.body.motivationLetter != undefined) {
            var modif = modif + ", motivationLetter = '" + request.body.motivationLetter.replaceAll("'","''") + "' "
        }
        bdd.bddEdit("UPDATE jobapplication SET id = '" + id + "'" + modif + " WHERE id = " + id + ";", (resp) => {
            response.send(resp)
        })
    }
    catch (error){
        response.status(400)
        response.send(error)
    }
}
