const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Express Demo NodeJS</h1> <h4>Message: Successfully deploy using Aws-code-deploy and AWS pipeline.Using codedeploy</h4> <p>Version 2.0</p>');
})

app.get('/products', (req, res) => {
  res.send([
    {
      <h5>productId: '101',</h5>
      price: 300
    },
    {
      productId: '102',
      price: 700
    }
  ])
})

app.listen(port, ()=> {
  console.log(`Demo app is up and listening to port: ${port}`);
})
 
