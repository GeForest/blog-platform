const jwt = require('jsonwebtoken')

module.exports = function signIn(User) {   
  return async (req, res) => {
    const { email, password } = req.body
    try {
      const user = await User.findOne({email})
      if (!user) return res.status(400).json({ error: 'Неправильная почта или пароль.' })

      const isMatch = await user.comparePassword(password)
      if (!isMatch) return res.status(400).json({ error: 'Неправильная почта или пароль.' })

      const token = jwt.sign(
        {userId: user._id},
        process.env.JWT_SECRET,
        {expiresIn: '10m'}
      )

      res.json({ success: true, message: 'Вы вошли на аккаунт.', token })
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}