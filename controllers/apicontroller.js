'use strict';

const express = require("express");

module.exports = (
  commitsRepository,
  reposRepository
) => {
  const router = express.Router();

  const commits = require("./commits")(commitsRepository);
  const repos = require("./repos")(reposRepository);
  router.use("/repos/commits", commits);
  router.use("/repos", repos);

  return router
};
