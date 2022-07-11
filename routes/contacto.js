var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
const SendmailTransport = require('nodemailer/lib/sendmail-transport');

router.get('/', function(req,res,next){
    res.render('contacto', {
        isContacto: true
    });
})

router.post('/', async function(req,res,next){
    console.log(req.body)
    var nombre = req.body.nombre;
    var email = req.body.email
    var telefono = req.body.telefono
    var comentarios = req.body.comentarios
    
    var obj = {
        to:'agustinornad09@gmail.com',
        subject:' Contacto desde la pagina web',
        html: nombre + " se contacto a traves de la web y quiere la teka " + email + "<br> su tel es " + telefono + " su comentario es " + comentarios + "."
    }

    var transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        }
    })

    var info = await transport.sendMail(obj);
    res.render('contacto',{
        message: 'mensaje enviado pa'
    })

})



module.exports = router;