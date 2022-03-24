const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({
      nama: 'Andri',
      email: 'andriali044@gmail.com',
      noHP: '085925153931',
  });
});
app.get('/about', (req, res) => {
  res.send('halaman pertama');
});
app.get('/person', (req, res) => {
  res.send('random');
});

app.use('/', (req, res) => {
    res.send('<h1>gada isinya</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});