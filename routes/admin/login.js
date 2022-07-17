var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModel');

router.get('/', function (req, res, next) {
    res.render('admin/login', {
        layout: 'admin/layout'
    });
});

router.post('/', async function (req, res, next) {
    try {
        console.log(req.body);
        var usuario = req.body.usuario;
        var password = req.body.password;

        var data = await usuariosModel.getUserAndPassword(usuario, password);


        if (data != undefined) {
            res.session.id_usuario = data.id;
            req.session.nombre = data.usuario;

            res.redirect('/admin/novedades')
        } //else {
           // res.redirect('/admin/login', {
           //     layout: 'admin/layout',
           //     error: true
          //  })
      //  }

    } catch (error) {

    }
});

module.exports = router;