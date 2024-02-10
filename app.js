const express = require('express'); 
const app = express(); 
const fs = require('fs');
const path = require('path');

app.use(express.static(__dirname + '/public'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
