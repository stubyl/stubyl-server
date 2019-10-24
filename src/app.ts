import express from 'express';

const app = express();
const port = 3009;
app.get('/', (req, res) => {
  res.send('Test server');
});
app.get('/testing', (req, res) => {
  res.json({response: 'success'});
});
app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});