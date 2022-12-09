const { request, response } = require("express");

module.exports = app => {
    const people = require("../controllers/people_controller.js");
  
    var router = require("express").Router();

    router.get("/", people.peopleGetAllExceptPassword);
    router.post("/register", people.peoplePostInsert);
    router.post("/login", people.peoplePostPassword);
    router.delete("/:id", people.peopleDelete);
    router.put("/:id", people.peoplePut);

    app.use('/api/people', router);
};