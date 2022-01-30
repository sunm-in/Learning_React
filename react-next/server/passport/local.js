const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local'); // { Strategy: LocalStrategy } 구조분해 할 때 변수명 바꾸는 문법
const bcrypt = require('bcrypt');
const { User } = require('../models');
module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
      },
      async (email, password, done) => {
        try {
          const user = await User.findOne({
            where: { email }, // { email: email } 이름이 같으면 줄일 수 있음
          });
          if (!user) {
            return done(null, false, { reason: '존재하지 않는 이메일입니다.' }); // 1.서버 에러 2.성공 여부 3.클라이언트 에러
          }
          const result = await bcrypt.compare(password, user.password);
          if (result) {
            return done(null, user); // 1.성공 2.사용자 정보
          }
          return done(null, false, { reason: '비밀번호가 틀렸습니다.' });
        } catch (error) {
          console.error(error);
          return done(error);
        }
      }
    )
  );
};
