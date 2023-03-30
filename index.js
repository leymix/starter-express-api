










const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');


const app = express();
app.use(cors())

// Parse incoming request bodies as JSON
app.use(bodyParser.json());

// User model
const users = [
  {
    id: 1,
    email: 'john@example.com',
    password: 'password'
  },
  {
    id: 2,
    email: 'jane@example.com',
    password: 'password'
  }
];

// Login route
app.post('/api/login', (req, res) => {
  const { email, password }=req.body
})
app.listen(8080,()=>{
    console.log("port is running")
})