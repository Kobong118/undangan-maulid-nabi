const express = require('express');
const router = express.Router();
const app = express();
const {loadTextContent}=require('../src/loadData')

router.get('/',(req,res,next)=>{
    res.redirect('/undangan-maulid-adm/muslimin')
})
router.get('/:kepada',(req,res,next)=>{
    const textsContents = loadTextContent(); 
    console.log(textsContents[2].textContent)
if(req.params.kepada !== undefined){
    res.render('adm',{layout:'layouts/main-layout', title:`Undangan kepada ${req.params.kepada}`,nama:req.params.kepada.toUpperCase(),textsContents,tanggal:'2024-10-27T06:00:00'})
} else next()
});

module.exports = router;