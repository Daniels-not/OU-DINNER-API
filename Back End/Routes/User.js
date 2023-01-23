const { verifySignUp } = require("../Helpers/index");
const controller = require("../Components/Auth");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  );

  app.post("/api/auth/signin", controller.signin);

  app.post("/api/auth/signout", controller.signout);
};

// Authorization:

//     GET /api/test/all
//     GET /api/test/user for loggedin users (user/moderator/admin)
//     GET /api/test/mod for moderator
//     GET /api/test/admin for admin

