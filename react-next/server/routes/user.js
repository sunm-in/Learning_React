const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../models');

const router = express.Router();

// 200 성공, 300 리다이렉트, 400 클라이언트 에러, 500 서버 에러

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

module.exports = router;
