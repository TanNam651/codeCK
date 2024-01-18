const verifyRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req?.roles) return res.sendStatus(401);
    console.log(req.roles);
    const roleArray = [...allowedRoles];

    const result = req.roles.map((role) => roleArray.includes(role)).find((val) => val === true);
    console.log(result);

    if (!result) return res.sendStatus(401);
    next();
  }
}

module.exports = verifyRoles;