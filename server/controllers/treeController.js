const Post = require("../models/tree");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const jwt = require("jsonwebtoken");

exports.tree_save_post = [
  // validate user input
  body("title", "Title must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("content", "Content must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),

  // add post to database
  (req, res, next) => {
    // Extract the validation errors from the request.
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(401).json({ success: false, errors: errors.array() });
    } else {
      // authenticate user before creating post
      passport.authenticate("jwt", { session: false }, (err, user) => {
        if (!user) {
          res
            .status(403)
            .json({
              success: false,
              msg: "User not authenticated. Please log in to save a tree.",
            });
        } else {
          console.log(user);
          Post.create({
            title: req.body.title,
            content: req.body.content,
            user: user.id,
          })
            .then((result) => res.json({ success: true, tree: result }))
            .catch((err) => res.json({ success: false, msg: err }));
        }
      })(req, res, next);
    }
  },
];

exports.tree_update_post = [
  // validate user input
  body("title", "Title must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("content", "Content must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),

  (req, res, next) => {
    // Extract the validation errors from the request.
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(401).json({ success: false, errors: errors.array() });
    } else {
      // authenticate user before creating post
      passport.authenticate("jwt", { session: false }, (err, user) => {
        if (!user) {
          res
            .status(403)
            .json({
              success: false,
              msg: "User not authenticated. Please log in to save a tree.",
            });
        } else {
          console.log(user);
          Post.update(
            {
              title: req.body.title,
              content: req.body.content,
            },
            {
              where: {
                id: req.body.id,
                user: user.id
              },
            }
          )
            .then((result) => res.json({ success: true, tree: result }))
            .catch((err) => res.json({ success: false, msg: err }));
        }
      })(req, res, next);
    }
  },
];
