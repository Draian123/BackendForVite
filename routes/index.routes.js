const User = require("../models/User.model");

const router = require("express").Router();

router.get("/", async (req, res, next) => {
  try{
    const response = await User.find()
    res.json(response);
  }catch(err) {
    console.error(err)
  }
});
router.get("/user/:id", async (req, res, next) => {
  const {id} = req.params;
  try{
    const response = await User.findById(id)
    res.json(response);
  }catch(err) {
    console.error(err)
  }
});


router.post("/signup", async (req, res, next) => { 
  try{
    const response = await User.create(req.body)
    res.status(201).json(response);
  }catch(err) {
    console.error(err)
  }
});

router.delete("/delete/:id", async (req, res, next) => { 
  const {id} = req.params;
  try{
    const response = await User.findByIdAndDelete(id)
    res.json(response);
  }catch(err) {
    console.error(err)
  }
});

router.put("/update/:id", async (req, res, next) => { 
  const {id} = req.params;
  try{
    const response = await User.findByIdAndUpdate(id, req.body, {new: true})
    res.json(response);
  }catch(err) {
    console.error(err)
  }
});

module.exports = router;
