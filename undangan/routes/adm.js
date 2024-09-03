const express = require('express');
const router = express.Router();

router.get('/kepada/:kepada',(req,res,next)=>{
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
    res.render('adm',{layout:'layouts/main-layout', title:'Undangan Maulid Al-Ukhuwwah Daarul Musthofa',nama:req.params.kepada.toUpperCase(),dataProperti})
});

module.exports = router;