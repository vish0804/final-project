var express = require('express');
const { redirect } = require('express/lib/response');
const { ObjectId } = require('mongodb');
const { client } = require('../db');
var router = express.Router();

/* GET users listing. */
router.all('/students', async function(req, res, next) {
  if(req.method==="POST"){
    console.log(req.body)
    req.body.role = "student"
    let resp = await client.db().collection("users").insertOne(req.body)
  }
  const students = await client.db().collection("users").find({role:"student"}).toArray()
  res.render("student_list",{students});
});

router.get('/dashboard', function(req, res, next) {
  res.render("dashboard");
});

router.get("/students/delete/:id",async (req,res)=>{
  console.log("user id",req.params.id)
  let resp = await client.db().collection("users").deleteOne({_id:new ObjectId(req.params.id)})
  console.log(resp.deletedCount);
  res.redirect("/teacher/students");
})

module.exports = router;
