import express from 'express';
import isAuth from '../middlewares/iaAuth';
import { FavorPers } from '../../db/models';

const router = express.Router();

router.get('/', (req, res) => {
  const initState = {};
  res.render('Layout', initState);
});

router.get('/personalArea', isAuth, async (req, res) => {
  try {
    const userId = req.session.user.id;
    const userFavors = await FavorPers.findAll({ where: { userId } });
    const favors = userFavors.map((el) => el.persId);
    res.render('Layout', { favors });
  } catch {
    res.sendStatus(500);
  }
});

router.get('/reg', (req, res) => {
  const initState = {};
  res.render('Layout', initState);
});

router.get('/login', (req, res) => {
  const initState = {};
  res.render('Layout', initState);
});
export default router;
