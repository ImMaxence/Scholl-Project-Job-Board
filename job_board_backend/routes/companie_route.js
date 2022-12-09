const { request, response } = require("express");

module.exports = app => {
    const companie = require("../controllers/companie_controller.js");
  
    var router = require("express").Router();

    router.get("/", companie.companieGetAllExceptPassword);
    router.post("/register", companie.companiePostInsert);
    router.post("/login", companie.companiePostPassword);
    router.delete("/:id", companie.companieDelete);
    router.put("/:id", companie.companiePut);

    app.use('/api/companie', router);
};