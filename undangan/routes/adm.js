const express = require('express');
const router = express.Router();
const app = express()

router.get('/',(req,res,next)=>{
    res.redirect('/undangan-maulid-adm/muslimin')
})
router.get('/:kepada',(req,res,next)=>{
    const dataProperti = {
        teks1 : 'مولد النبي المصطفى',
        teks2 :'Undangan Maulid Nabi',
        logoSrc : '',
        teks3 : 'Kepada :',
        teks4 :' Buka Undangan',
        teks5 :`MEMPERINGATI KELAHIRAN NABI TERAGUNG KANJENG NABI MUHANNAD SAW`,
        teks6 : `27 Oktober 2024M - 24 Rabiul Akhir 1446H`,
        teks7 :`مجلس التعليم<br />الأخوة دار المصطفى`,
    }
if(req.params.kepada !== undefined){
    res.render('adm',{layout:'layouts/main-layout', title:`Undangan kepada ${req.params.kepada}`,nama:req.params.kepada.toUpperCase(),dataProperti,tanggal:'2024-10-27T06:00:00'})
} else next()
});

module.exports = router;