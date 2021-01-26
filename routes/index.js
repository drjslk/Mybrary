const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    // res.writeHead(200, {'Content-Type': 'text/html'})
    // res.write('hi there')
    // res.end()
    res.render('index') //index.ejs from views directory
})

module.exports = router