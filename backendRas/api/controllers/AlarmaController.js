/**
 * AlarmaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var led = require('Led');
module.exports = {

  compare: function(req, res) {
    //0 si es igual
    //-1 si no es igual
    var str1="encender";
    var str2="apagar";

    if(req.body.accion.localeCompare(str1)===0)
    {
      console.log("if",req.body.nombre);
      led.llamar();
      return res.send(req.body.nombre);
    }if(req.body.accion.localeCompare(str2)===0)
    {
      console.log("if",req.body.nombre);
      led.llamar();
      return res.send(req.body.nombre);
    }
    else
    {
      console.log("else",req.body.nombre);
      return res.send('enviaste apagado');
    }

  },

};

