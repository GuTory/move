const express = require('express');
const app = express();

app.use(express.static('static'));
app.listen(3000, function () {
    console.log('On port :3000');
});