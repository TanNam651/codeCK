const User = require('../models/users');
const bcrypt = require('bcrypt');

const handleRegister = async (req,res) => {
  const { name, username, email, password, phones } = req.body;
  if (!name || !username || !email || !password || !phones) return res.status(400).json({ 'message': 'Not required' });

  const dupicated = await User.findOne({ email: email }).exec();
  if (dupicated) return res.sendStatus(409); //conflict
  try {
    const hashedPwd = await bcrypt.hash(password, 10);

    const result = await User.create({
      'name': name,
      'username': username,
      'email': email,
      'password': hashedPwd,
      'phones': phones
    });
    console.log(result);

    res.status(201).json({ 'success': `New user ${name} created!` });
  } catch (err) {
    res.status(500).json({ 'message': err.message });
  }
}

module.exports = {handleRegister};