const express = require("express");
const bodyParser = require("body-parser");
const abilitiesChecker = require("./repositories/abilities");
const Sequelize = require("sequelize");
const config = require("./config.json");
const dbs = require("./cont/context.js");
const db = dbs(Sequelize, config);
const ReposRepository = require("./repositories/reposrepository")(db.Repos);
const CommitsRepository = require("./repositories/CommitsRepository")(db.Commits);
const api = require("./controllers/apicontroller")(
    CommitsRepository,
    ReposRepository
);
const app = express();
app.get("/api/abilities", abilitiesChecker.rules);
app.use("/*", abilitiesChecker.checkAbilities);
app.use(bodyParser.json());
app.use("/api", api);
app.use("/", function(req, res) {
    res.send("testing page 322");
});

const port = process.env.PORT || 3000;

db.sequelize.sync().then(() => {
    app.listen(port, () => console.log("Running on port " + port));
});



