const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

require('./routes/people_route.js')(app);
require('./routes/companie_route.js')(app);
require('./routes/advertisement_route.js')(app);
require('./routes/jobapplication_route.js')(app);

app.listen(8080);