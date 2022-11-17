const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 3000
const GENERATED_DIRECTORY = path.join(__dirname, "./generated");

app.use(express.static(GENERATED_DIRECTORY));

app.get('/', (req, res) => {
    res.sendFile(path.join(GENERATED_DIRECTORY, './index.html'))
})

app.listen(port)
