const exporess = require('express');
const postRouter = require('./routes/post');

const app = exporess();

app.get('/', (req, res) => {
  res.send('server test');
});

app.get('/', (req, res) => {
  res.send('hello api');
});

app.get('/posts', (req, res) => {
  res.json([
    { id: 1, content: 'hello' },
    { id: 2, content: 'hello2' },
    { id: 3, content: 'hello3' },
  ]);
});

app.use('/post', postRouter);

app.listen(8080, () => {
  console.log('서버 실행 중');
});