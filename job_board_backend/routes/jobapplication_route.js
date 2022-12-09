const { request, response } = require("express");

module.exports = app => {
    const jobapplication = require("../controllers/jobapplication_controller.js");
  
    var router = require("express").Router();

    router.get("/", jobapplication.jobapplicationSelectAll);
    router.post("/", jobapplication.jobapplicationInsert);
    router.delete("/:id", jobapplication.jobapplicationDelete);
    router.put("/:id", jobapplication.jobapplicationPut);

    app.use('/api/jobapplication', router);
};