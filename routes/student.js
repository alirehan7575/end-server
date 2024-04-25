var express = require('express')
var router = express.Router()

router.get("/get-std", function (req, res, next) {
    res.send("heloooo.......")
})

//  query parameters
//http://localhost:3000/std/get-std-query?name=Sayyad&marks=98   //in brower with link

router.get("/get-std-query", function (req, res, next) {
    const n = req.query.name;
    const marks = req.query.marks;
    res.send(`heloooo......my name${n} and my marks are ${marks}.`)
})

//  path parameters
//http://localhost:3000/std/get-std-path/sayyad/98
//if hardcore/static=/name/marks if dynamic= /:name/:marks  //in brower with link
router.get("/get-std-path/:name/:marks", function (req, res, next) {
    const n = req.params.name;
    const marks = req.params.marks;
    res.send(`heloooo......my name${n} and my marks are ${marks}.`)
})

//request headers 
//http://localhost:3000/std/get-std-headers
//check result in postman in headers with same method with router
router.get("/get-std-headers", function (req, res, next) {
    const n = req.headers.name;
    const marks = req.headers.marks;
    res.send(`heloooo......my name ${n} and my marks are ${marks}.`)
})


//request body
//http://localhost:3000/std/get-std-body
//check result in postman in body in row in  with same method with router
router.get("/get-std-body", function (req, res, next) {
    const n = req.body.name;
    const marks = req.body.marks;
    res.send(`heloooo......my name ${n} and my marks are ${marks}.`)
})

module.exports = router;