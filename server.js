const express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    PORT = process.env.PORT || 5000,
    routes = require('./routes');

require('dotenv').config();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// points to built app directory
app.use(express.static('client/build'));

app.use(routes);

// Start API SERVER

app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
})