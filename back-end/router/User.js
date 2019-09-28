const express = require('express');
const router = express.Router();
const user = require ('../Controller/User');


router
.post("/register", (req, res, next) => {
    if (!req.body.email || !req.body.password) {
      res.send({
        result: false
      })
    } else {
      user.register(req.body.email, req.body.password, req.body.name, (error, result) => {
        if (error) {
          res.send({
            result: false,
            detail: error
          });
        } else {
          res.send({
            result: true
          })
        }
      })
    }
  })
  .post("/login", (req, res, next) => {
    user.login(req.body.email, req.body.password, (error, result) => {
      if (error || !result) {
        res.status(200).send({
          result: false
        });
      } else {
        // user.updateToken(req.body.email, req.body.password, result);
        delete result.user.password;
        res.status(200).send({
          result: true,
          token: result.token,
          info: result.user
        });
      }
    })
  })


module.exports = router