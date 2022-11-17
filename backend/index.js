const express = require('express')
const path = require('path')

const app = express()
const port = 3000

app.use(express.static('/web'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../bundle/index.html'))
})

app.listen(port)
