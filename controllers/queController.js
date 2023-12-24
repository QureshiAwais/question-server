var express=require('express');

var router=express.Router();
var queService=require('../services/queService')
router.post('/save',async(req,res,next)=>{
    const data=req.body.data;
    const result=await queService.save(data)
    res.send(result)
});
module.exports=router;