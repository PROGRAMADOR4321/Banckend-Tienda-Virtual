const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).json({ msg: "Token no proporcionado" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user; // Debe incluir el payload { id, role }
    next();
  } catch (error) {
    res.status(401).json({ msg: "Token inválido" });
  }
};

module.exports = auth;