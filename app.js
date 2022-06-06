const express = require('express');
const app = express();
app.use(express.json());
const personalDetailsRoute = require('./basic-api/personalDetails');
app.use("/personalDetails",personalDetailsRoute);
// app.use((req,res)=>{
//     res.send('Working');
// })
module.exports = app;