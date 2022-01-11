import express from 'express';

const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', function (req, res) {
  res.send({ message: 'hello world!' })
});

app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
  });