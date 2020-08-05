const express = require('express');
let bodyParser = require('body-parser');


const app = express();
const port = 4000;
app.use(bodyParser.json({ extended: false }));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get('/', (req, res) => res.send('Hello World!'));

app.get("/products", (req,res) => {
  const products = [
  {
    id: 1,
    name: "hammer",
  },
  {
    id: 2,
    name: "screwdriver",
  },
  ,
  {
    id: 3,
    name: "wrench",
  },
 ];

 res.json(products);
});
