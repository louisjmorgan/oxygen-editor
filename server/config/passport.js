const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const fs = require("fs");
const path = require("path");
const User = require("../models/user");

const pathToKey = path.join(__dirname, "..", "id_rsa_pub.pem");
const PUB_KEY = fs.readFileSync(pathToKey, "utf8");

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: PUB_KEY,
  algorithms: ["RS256"],
};

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(options, function (jwt_payload, done) {
      User.findAll({
        where: {
          id: jwt_payload.sub,
        },
      })
        .then((result) => {
          if (result) {
            const user = result[0].dataValues;
            return done(null, user);
          } else {
            return done(null, false);
          }
        })
        .catch((err) => done(err, false));
    })
  );
};
