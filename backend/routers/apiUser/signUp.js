module.exports = function signUp(User) {
  return async (req, res)=>{
  const { email } = req.body
    try {
      const existUser = await User.findOne({email})
      if (existUser) {
        return res.status(400).json({error: 'Пользователь уже зарегистрирован.'})
      }

      const newUser = new User(req.body)
      await newUser.save()
      res.json({ success: true, message: 'Вы успешно зарегистрировались.' })
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}