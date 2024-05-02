const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');


app.use(cors());

port = 3080;
app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
