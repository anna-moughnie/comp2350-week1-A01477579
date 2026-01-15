const express = require('express');

const app = express();
const port = process.env.PORT || 3016;

app.get('/', (req, res) => {
  res.send(`<h1>Anna Moughnie! :] 🐇🐰</h1>`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});