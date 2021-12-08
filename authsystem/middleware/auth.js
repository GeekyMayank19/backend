const jwt = require("jsonwebtoken");

// creating custom middleware

const auth = (req, res, next) => {
  // taking token from header or cookies or body
  console.log(req.cookies);
  const token =
  req.cookies.token ||
  req.body.token ||
  req.header("Authorization").replace("Bearer ", "");

    // console.log(token)
  if (!token) {
    return res.status(403).send("token is missing ");
  }

  try {
    const decode = jwt.verify(token, process.env.SECRET_KEY);
    console.log(decode);
  } catch (error) {
    return res.status.send("invalid token");
  }
  return next();
};

module.exports = auth;
