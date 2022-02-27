const express= require("express");
const router = express.Router();

router.get("/", (req,res) => {
  res.json({msg:"new version 27.2.2022 777 88"});
})

module.exports = router;