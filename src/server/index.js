const express = require('express');
const router = require('./routes');

const app = express();

app.use(express.static('dist'));
app.use(express.json());
app.use(router);

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
