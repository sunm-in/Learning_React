const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const { User } = require('../models');

const router = express.Router();

// 200 성공, 300 리다이렉트 or 캐싱, 400 클라이언트 에러, 500 서버 에러

// 미들웨어를 확장하는 방법
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    // 1.서버 에러 2.성공 객체 3.info(client error)
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send('info.reason'); // 403 금지, 401 허용되지 않는 요청
    }
    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      return res.status(200).json(user); // 로그인 성공시 사용자 정보를 client로 전달
    });
  })(req, res, next);
});

// POST /user/
router.post('/', async (req, res, next) => {
  try {
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (exUser) {
      return res.status(403).send('이미 사용중인 아이디입니다.');
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
    });
    res.status(201).send('ok'); // 201 잘 생성됨(사용자 등록이 잘됨)
  } catch (error) {
    console.error(error);
    next(error); // status 500
  }
});

router.post('/user/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('ok');
});

module.exports = router;
