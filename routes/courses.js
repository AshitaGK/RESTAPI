const express = require("express");

const router = express.Router();

const Course = require("../models/Course");

// router.get("/", (req, res) => {
//     res.send("course route");
// });


router.get("/", (req, res) => {
       Course.find()
       .exec()
       .then(result => {
           res.json(result);
       })
           .catch(err => {
           res.json(err)
           })
         })

router.get("/1", (req, res) => {
    res.send(" route");
});

router.post("/", (req, res) => {
    const mycourse = new Course({
        course: req.body.course,
        tag: req.body.tag
    });
    
    mycourse.save()
    .then(result => {
       res.json(result);
    // console.log(result);
    })
   .catch(err => {
    res.json(err);
    //    console.log(err);
   });
});




module.exports = router;