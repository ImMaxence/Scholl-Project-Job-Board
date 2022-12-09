const { request, response } = require("express");

module.exports = app => {
    const advertisement = require("../controllers/advertisement_controller.js");
  
    var router = require("express").Router();

    router.get("/", advertisement.advertisementSelectAll);
    router.post("/", advertisement.advertisementInsert);
    router.delete("/:id", advertisement.advertisementDelete);
    router.put("/:id", advertisement.advertisementPut);

    app.use('/api/advertisement', router);
};