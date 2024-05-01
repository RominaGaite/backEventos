import express from 'express'
let router = express.Router();


router.get('/', function(req, res, next) {
  res.render('users', { title: 'Express' });
});

export default router
