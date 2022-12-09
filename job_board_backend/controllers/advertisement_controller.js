const bdd = require('../models/bdd.js')

exports.advertisementSelectAll = (request, response) => {
    try {
        var requestGet = '' 
        var orderBy = ''
        if (request.query.id != undefined) {
            requestGet = requestGet + ' AND advertisement.id = "' + request.query.id.replaceAll("'","''") + '"'
        } 
        if (request.query.title != undefined) {
            requestGet = requestGet + ' AND advertisement.title = "' + request.query.title.replaceAll("'","''") + '"'
        } 
        if (request.query.createdDate != undefined) {
            requestGet = requestGet + ' AND advertisement.createdDate = "' + request.query.createdDate.replaceAll("'","''") + '"'
        } 
        if (request.query.location != undefined) {
            requestGet = requestGet + ' AND advertisement.location = "' + request.query.location.replaceAll("'","''") + '"'
        } 
        if (request.query.salarie != undefined) {
            requestGet = requestGet + ' AND advertisement.salarie = "' + request.query.salarie.replaceAll("'","''") + '"'
        } 
        if (request.query.type != undefined) {
            requestGet = requestGet + ' AND advertisement.type = "' + request.query.type.replaceAll("'","''") + '"'
        } 
        if (request.query.isActive != undefined) {
            requestGet = requestGet + ' AND advertisement.isActive = "' + request.query.isActive.replaceAll("'","''") + '"'
        } 
        if (request.query.isRemote != undefined) {
            requestGet = requestGet + ' AND advertisement.isRemote = "' + request.query.isRemote.replaceAll("'","''") + '"'
        } 
        if (request.query.orderBy != undefined && (request.query.orderBy).substring(0, 3) === 'sup') {
            requestGet = requestGet + ' ORDER BY ' + (request.query.orderBy.replaceAll("'","''")).substring(3) + ' DESC'
        } 
        if (request.query.orderBy != undefined && (request.query.orderBy).substring(0, 3) === 'inf') {
            requestGet = requestGet + ' ORDER BY ' + (request.query.orderBy.replaceAll("'","''")).substring(3)
        }
        if (requestGet != undefined) {
            bdd.bddSelect("SELECT advertisement.id, advertisement.title, advertisement.createdDate, advertisement.location, advertisement.salarie, advertisement.type, advertisement.isActive, advertisement.isRemote, advertisement.qualificationRequired, advertisement.description, advertisement.pictureDataAdvertisement, companie.username, companie.pictureDataCompanie FROM advertisement, companie WHERE advertisement.companieId = companie.id " + requestGet + orderBy + ";", (resp) => {
            response.send(resp)
        })
        }
        else {
            bdd.bddSelect("SELECT advertisement.id, advertisement.title, advertisement.createdDate, advertisement.location, advertisement.salarie, advertisement.type, advertisement.isActive, advertisement.isRemote, advertisement.qualificationRequired, advertisement.description, advertisement.pictureDataAdvertisement, companie.username, companie.pictureDataCompanie FROM advertisement, companie WHERE advertisement.companieId = companie.id;", (resp) => {
                response.send(resp)
            })
        }
        }
    catch (error){
        response.status(400)
        response.send(error)
    }
}
exports.advertisementInsert = (request, response) => {
    try {
        var title = ''
        var createdDate = ''
        var location = ''
        var salarie = ''
        var type = ''
        var isActive = ''
        var isRemote = ''
        var qualificationRequired = ''
        var description = ''
        var pictureDataAdvertisement = ''
        if (request.body.title != undefined) {
            var title = request.body.title.replaceAll("'","''")
        }
        if (request.body.pictureDataAdvertisement != undefined) {
            var pictureDataAdvertisement = request.body.pictureDataAdvertisement.replaceAll("'","''")
        }
        if (request.body.createdDate != undefined) {
            var createdDate = request.body.createdDate.replaceAll("'","''")
        }
        if (request.body.location != undefined) {
            var location = request.body.location.replaceAll("'","''")
        }
        if (request.body.salarie != undefined) {
            var salarie = request.body.salarie.replaceAll("'","''")
        }
        if (request.body.type != undefined) {
            var type = request.body.type.replaceAll("'","''")
        }
        if (request.body.isActive != undefined) {
            var isActive = request.body.isActive.replaceAll("'","''")
        }
        if (request.body.isRemote != undefined) {
            var isRemote = request.body.isRemote.replaceAll("'","''")
        }
        if (request.body.qualificationRequired != undefined) {
            var qualificationRequired = request.body.qualificationRequired.replaceAll("'","''")
        }
        if (request.body.description != undefined) {
            var description = request.body.description.replaceAll("'","''")
        }
        if (request.body.companieId != undefined) {
            var companieId = request.body.companieId.replaceAll("'","''")
        }
        bdd.bddInsert("INSERT INTO advertisement (id, title, createdDate, location, salarie, type, isActive, isRemote, qualificationRequired, description, companieId, pictureDataAdvertisement) VALUES (NULL, '" + title + "', '" + createdDate + "', '" + location + "', '" + salarie + "', '" + type + "', '" + isActive + "', '" + isRemote + "', '" + qualificationRequired + "', '" + description + "', '" + companieId + "', '" + pictureDataAdvertisement + "');", (resp) => {
            response.send(resp)
        })
    }
    catch (error){
        response.status(400)
        response.send(error)
    }
}
exports.advertisementDelete = (request, response) => {
    try {
        var id = ''
        if (request.params.id != undefined) {
            var id = request.params.id.replaceAll("'","''")
        }
        bdd.bddDelete("DELETE FROM advertisement WHERE id='" + id + "';", (resp) => {
            response.send(resp)
        })
    }
    catch (error){
        response.status(400)
        response.send(error)
    }
}
exports.advertisementPut = (request, response) => {
    try {
        var id = ''
            var modif = ''
            if (request.params.id != undefined) {
                var id = request.params.id.replaceAll("'","''")
            }
            if (request.body.title != undefined) {
                var modif = modif + ", title = '" + request.body.title.replaceAll("'","''") + "' "
            }
            if (request.body.createdDate != undefined) {
                var modif = modif + ", createdDate = '" + request.body.createdDate.replaceAll("'","''") + "' "
            }
            if (request.body.location != undefined) {
                var modif = modif + ", location = '" + request.body.location.replaceAll("'","''") + "' "
            }
            if (request.body.salarie != undefined) {
                var modif = modif + ", salarie = '" + request.body.salarie.replaceAll("'","''") + "' "
            }
            if (request.body.type != undefined) {
                var modif = modif + ", type = '" + request.body.type.replaceAll("'","''") + "' "
            }
            if (request.body.isActive != undefined) {
                var modif = modif + ", isActive = '" + request.body.isActive.replaceAll("'","''") + "' "
            }
            if (request.body.isRemote != undefined) {
                var modif = modif + ", isRemote = '" + request.body.isRemote.replaceAll("'","''") + "' "
            }
            if (request.body.pictureDataAdvertisement != undefined) {
                var modif = modif + ", pictureDataAdvertisement = '" + request.body.pictureDataAdvertisement.replaceAll("'","''") + "' "
            }
            if (request.body.qualificationRequired != undefined) {
                var modif = modif + ", qualificationRequired = '" + request.body.qualificationRequired.replaceAll("'","''") + "' "
            }
            if (request.body.description != undefined) {
                var modif = modif + ", description = '" + request.body.description.replaceAll("'","''") + "' "
            }
            if (request.body.companieId != undefined) {
                var modif = modif + ", companieId = '" + request.body.companieId.replaceAll("'","''") + "' "
            }
            bdd.bddEdit("UPDATE advertisement SET id = '" + id + "'" + modif + " WHERE id = " + id + ";", (resp) => {
                response.send(resp)
            })
    }
    catch (error){
        response.status(400)
        response.send(error)
    }
}
