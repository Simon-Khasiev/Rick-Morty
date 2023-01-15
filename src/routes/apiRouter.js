import express from 'express';
import { hash, compare } from 'bcrypt';
import { User, FavorPers } from '../../db/models';

const regRouter = express.Router();

regRouter.post('/login', async (req, res) => {
  try {
    const { email, pass: password } = req.body;

    if (!email || !password) return res.status(400).json({ message: 'Все поля обязательны для заполнения!' });
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(400).json({ message: 'Неверно введена почта или пароль' });

    const isPassValid = await compare(password, user.pass);

    if (!isPassValid) return res.status(400).json({ message: 'Неверно введён логин или пароль' });

    req.session.user = { id: user.id, email: user.email, name: user.name };

    return res.sendStatus(200);
  } catch {
    res.sendStatus(500).json({ message: 'Ошибка сервера' });
  }
});

regRouter.post('/reg', async (req, res) => {
  try {
    const { name, email, pass: password } = req.body;
    if (!name || !email || !password) return res.status(400).json({ message: 'Все поля должны быть заполнены' });
    const pass = await hash(password, 10);

    const [user, isCreated] = await User.findOrCreate({
      where: { email },
      defaults: { name, email, pass },
    });

    if (!isCreated) return res.status(400).json({ message: 'Вы уже зарегистрированны, пройдите авторизацию' });

    req.session.user = { id: user.id, email: user.email };

    res.sendStatus(200);
  } catch {
    res.sendStatus(500).json({ message: 'Ошибка сервера' });
  }
});

regRouter.get('/logout', (req, res) => {
  try {
    res.clearCookie('user_sid');
    req.session.destroy();
    res.redirect('/');
  } catch {
    res.sendStatus(500).json({ message: 'Ошибка сервера' });
  }
});

regRouter.post('/addFavor/:uid', async (req, res) => {
  try {
    const { uid } = req.params;
    const { persId } = req.body;
    await FavorPers.create({ userId: uid, persId });
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
});

regRouter.delete('/delFavor/:uid', async (req, res) => {
  const { persId } = req.body;
  const { uid } = req.params;
  try {
    await FavorPers.destroy({ where: { persId, userId: uid } });
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
});

export default regRouter;
