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

//home
router.get('/', (req, res) => {
  res.json({ userData: req.user });
})
//

//User Sign Up
router.get('/signup', (req, res) => {
  res.json({ userData: req.user })
})

router.post('/signup', async (req, res, next) => {
  try {
    const client = await pool.connect()
    await client.query('BEGIN')
    let password = await bcrypt.hash(req.body.password, 5);
    await JSON.stringify(client.query('SELECT id FROM "users" WHERE "email"=$1', [req.body.email], (err, result) => {
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

//


//checks if user is authenticated
router.get('/isAuthenticated', (req, res, next) => {
  if (req.isAuthenticated()) {
    res.json({ userData: req.user })
  }
  else {
    console.log('not logged in')
  }
})
//

//login
router.get('/login', (req, res, next) => {
  if (req.isAuthenticated()) {
    console.log('user is already logged in');
  }
  else {
    res.json({ userData: req.user })
  }
})

router.post('/login', passport.authenticate('local', (req, res) => {
  if (req.body.remember) {
    req.session.cookie.maxAge = 30 * 24 * 60 * 60 * 1000; //expires 30 days
  } else {
    req.session.cookie.expires = false;
  }
}))
//

router.get('/logout', (req, res) => {
  console.log(req.isAuthenticated());
  req.logout();
  console.log(req.isAuthenticated());
})

//passport local strategy
passport.use('local', new LocalStrategy({ passReqToCallback: true }, (req, username, password, done) => {
  loginAttempt();
  async function loginAttempt() {
    const client = await pool.connect()
    try {
      await client.query('BEGIN')
      let currentAccountsData = await JSON.stringify(client.query('SELECT id, "email", "password" FROM "users" WHERE "email"=$1 '), [username], function (err, result) {
        if (err) {
          return done(err)
        }
        if (result.rows[0] == null) {
          console.log('incorrect login details')
          return done(null, false);
        }
        else {
          bcrypt.compare(password, result.rows[0].password, function (err, check) {
            if (err) {
              console.log('Error while checking password');
              return done()
            } else if (check) {
              return done(null, [{ email: result.rows[0].email }]);
            }
            else {
              console.log('incorrect login details');
              return done(null, false)
            }
          })
        }
      })
    }
    catch (e) { throw (e); }
  }
}))
passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});


module.exports = router