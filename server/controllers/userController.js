const User = require("../models/user");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const jwt = require("jsonwebtoken");

// Load private rsa key
const path = require("path");
const fs = require("fs");
const pathToKey = path.join(__dirname, "..", "id_rsa_priv.pem");
const PRIV_KEY = fs.readFileSync(pathToKey, "utf8");

exports.user_register_post = [
  body("username", "username must not be empty.")
    .trim()
    .isLength({ min: 5, max: 20 })
    .escape()
    .custom((value) => {
      return User.findOne({ where: { username: value } }).then((res) => {
        if (res)
          return Promise.reject("Username already taken");
      });
    }),

  body("password", "Password must not be empty")
    .trim()
    .isLength({ min: 6 })
    .escape(),

  body("confirmPassword", "Password confirmation must match password")
    .trim()
    .custom((value, { req }) => value === req.body.password)
    .escape(),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(401).json({ success: false, errors: errors.array() });
    } else {
      bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
        User.create({
          username: req.body.username,
          password: hashedPassword,
        })
          .then((result) => res.json({ success: true, user: result }))
          .catch((err) =>
            res.json({
              success: false,
              errors: [
                { msg: "Registration error.", err: err },
              ],
            })
          );
      });
    }
  },
];

exports.user_login_post = [
  body("username", "username must not be empty.")
    .trim()
    .isLength({ min: 1, max: 20 })
    .escape(),
  body("password", "Password must not be empty")
    .trim()
    .isLength({ min: 6 })
    .escape(),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(401).json({ success: false, errors: errors.array() });
    } else {
      User.findAll({
        where: {
          username: req.body.username,
        },
      })
        .then((result) => {
          const user = result[0].dataValues;
          bcrypt.compare(req.body.password, user.password, (err, valid) => {
            if (valid) {
              const id = user.id;
              const payload = {
                sub: id,
                iat: Date.now(),
              };

              const expiresIn = "1d";
              const signedToken = jwt.sign(payload, PRIV_KEY, {
                expiresIn: expiresIn,
                algorithm: "RS256",
              });
              const tokenObject = {
                token: "Bearer " + signedToken,
                expires: expiresIn,
              };

              res.status(200).json({
                success: true,
                token: tokenObject.token,
                expiresIn: tokenObject.expires,
              });
            } else {
              res
                .status(401)
                .json({
                  success: false,
                  errors: [
                    { msg: "Incorrect password", param: "password", err: err },
                  ],
                });
            }
          });
        })
        .catch((err) =>
          res
            .status(401)
            .json({
              success: false,
              errors: [
                { msg: "Incorrect username", param: "username", err: err },
              ],
            })
        );
    }
  },
];
