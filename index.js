const express = require('express');

const app = express();
const port = process.env.PORT || 3016;

app.get('/', (req, res) => {
  res.send(`Anna Moughnie! :] 🐇`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});