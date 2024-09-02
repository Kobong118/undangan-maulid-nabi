const express = require('express');
const router = express.Router();

router.get('/kepada/:kepada',(req,res,next)=>{
    const dataProperti = {
        teks1 : 'مولد النبي المصطفى',
        teks2 :'Undangan Maulid Nabi',
        logoSrc : '/images/logo.gif',
        teks3 : 'Kepada :',
        teks4 :' Buka Undangan',
        teks5 :`MEMPERINGATI KELAHIRAN NABI TERAGUNG`,
        teks5a:` KANJENG NABI MUHANNAD SAW`,
        teks6 : `27 Oktober 2024M - 24 Rabiul Akhir 1446H <br /> Di`,
        teks7 :`مجلس التعليم<br />الأخوة دار المصطفى`,
        teks8 :`
                    <p class="text-base text-center font-kufi">كفى بسيدنا محمد صلى الله عليه وسلم أسوة وقدوة للناس في
                        جميع شؤونهم في الحياة</p>
                    <p class="text-base text-center mt-4">"Cukuplah baginda nabi Muhammad SAW sebagai suritauladan dan
                        panutan untuk semua manusia dalam segala gerak-gerik kehidupannya"</p>`,
    }
    res.render('adm',{layout:'layouts/main-layout',title:'Undangan Maulid Al-Ukhuwwah Daarul Musthofa',nama:req.params.kepada.toUpperCase(),dataProperti})
});

module.exports = router;