const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

const BASE_URL = 'https://api.github.com/users'

app.post('/', async (req, res, next) => {
  console.log(req.body);
  try {
    let results = []
    for (dev of req.body.developers){
      let resp = await axios.get(`${BASE_URL}/${dev}`);
      results.push({"name": resp.data.name, "bio": resp.data.bio});
    }
    return res.send(results);
  } catch(err) {
    next(err);
  }
});

// Error handler
app.use(function(err, req, res, next) {
  let status = err.status || 500;
  let message = err.message;
  return res.status(status).json({
    error: {message, status}
  });
});

app.listen(3000, ()=>{
  console.log("server started on port 3000")
});

////////////////////////////////////////////////////////////////////


