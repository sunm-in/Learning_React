const exporess = require('express');

const app = exporess();

app.get('/', (req, res) => {
  res.send('server test');
});

app.listen(8080, () => {
  console.log('서버 실행 중');
});
