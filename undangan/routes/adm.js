const express = require('express');
const router = express.Router();

router.get('/kepada/:kepada',(req,res,next)=>{
    res.render('adm',{layout:'layouts/main-layout',title:'Undangan Maulid Al-Ukhuwwah Daarul Musthofa',nama:req.params.kepada.toUpperCase()})
});

module.exports = router;