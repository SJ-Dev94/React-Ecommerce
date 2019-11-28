var express = require('express');
var router = express.Router();
var passport = require('passport');
var axios = require('axios');
const { Pool, Client } = require('pg');
const bcrypt = require('bcrypt');
const uuidv4 = require('uuid/v4');
const LocalStrategy = require('passport-local').Strategy;
const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
  ssl: true
});

router.get('/', (req, res) => {
  res.json({ userData: req.user });
})

router.get('/signup', (req, res, next) => {
  res.json({ userData: req.user })
})

router.post('/signup', async (req, res) => {
  try {
    const client = await pool.connect()
    await client.query('BEGIN')
    var password = await bcrypt.hash(req.body.password, 5);
    await JSON.stringify(client.query('SELECT id FROM "users" WHERE "email"=$1', [req.body.username], (err, result) => {
      if (result.rows[0]) {
        console.log('this email address is already registered')
      }
      else {
        client.query('INSERT INTO users (id, email, password) VALUES ($1, $2, $3)', [uuidv4(), req.body.email, password], (err, result) => {
          if (err) {
            console.log(err);
          } else {
            client.query('COMMIT')
            console.log(result)
            return;
          }
        })
      }
    }));
    client.release();
  }
  catch (e) {
    throw (e)
  }
});

router.get('/isAuthenticated', (req, res, next) => {
  if (req.isAuthenticated()) {
    res.json({ userData: req.user })
  }
  else {
    console.log('not logged in')
  }
})

router.get('/login', (req, res, next) => {
  if (req.isAuthenticated()) {
    console.log('user is already logged in');
  }
  else {
    res.json({ userData: req.user })
  }
})



module.exports = router