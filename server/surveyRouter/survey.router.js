const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
  let newSurvey = req.body;
  let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;

  pool
    .query(queryText, [
      newSurvey.feeling,
      newSurvey.understanding,
      newSurvey.support,
      newSurvey.comments,
    ])
    .then((result) => {
      res.sendStatus(201);
    });
});

router.get('/', (req, res) => {
  let queryText = `SELECT * FROM "feedback" ORDER BY "id" DESC;`;
  pool
    .query(queryText)
    .then((result) => {
      res.sendStatus(result.rows);
    })
    .catch((error) => {
      console.log('error in GET', error);
      res.sendStatus(500);
    });
});
//Our survey router file that houses our GET and POST routes.
module.exports = router;
