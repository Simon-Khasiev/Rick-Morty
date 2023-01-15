export default function middleware(req, res, next) {
  res.locals.path = req.originalUrl;
  res.locals.user = req.session.user;
  res.locals.name = req.session?.user?.name;
  res.locals.email = req.session?.user?.email;
  next();
}
