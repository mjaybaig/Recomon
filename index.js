const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/@fortawesome/fontawesome-free/css')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/popper.js/dist/umd')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'))
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))