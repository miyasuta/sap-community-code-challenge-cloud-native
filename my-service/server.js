const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send(`Your Node.js service is running on port ${PORT}...`);
});

app.get('/hello/:communityID', (req, res) => {
  res.send(`Hello Kyma, hello ${req.params.communityID}!`);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});