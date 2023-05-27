const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');


exports.authenticateToken = async (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
      return StatusCodes.UNAUTHORIZED;
    }
  
    jwt.verify(token.replace('Bearer ', ''), process.env.SECRETKEY, (err, user) => {
      if (err) {
        return StatusCodes.FORBIDDEN;
      }
  
      req.user = user;
      next();
    });
  }

  exports.authenticateUser = async (req, res) => {
    const { username, password } = req.body;
  
    if (username === 'admin' && password === 'apicependereco') {
      const token = jwt.sign({ username }, process.env.SECRETKEY,{
        expiresIn: 300
    });
    return res.json({ auth: true, token: token });
    } else {
      return res.status(StatusCodes.UNAUTHORIZED).json({ error: 'Credenciais inválidas' });
    }
  }