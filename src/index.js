const express = require('express');
const morgan = require('morgan');
const db = require('./database/database');
const path = require('path');

const app = express();

// Settings 
app.set('port', process.env.PORT || 3000);

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
  });