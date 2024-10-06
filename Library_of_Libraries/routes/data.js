const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/bookname', (req, res)=>{
    
    res.sendFile(path.join(__dirname, '../data/bookname.json'))
})

router.get('/books', (req, res)=>{

    res.sendFile(path.join(__dirname, '../data/books.json'))
})

module.exports = router