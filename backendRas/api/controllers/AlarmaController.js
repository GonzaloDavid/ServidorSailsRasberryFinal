/**
 * AlarmaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

//var led = require('Led.js');
module.exports = {

  compare: function(req, res) {
    //0 si es igual
    //-1 si no es igual
    var str1="activar";
    var str2="desactivar";
    const request = require('request');
console.log('el valor de strr1 es ',str1);

    if(req.body.accion.localeCompare(str1)==0)
    {
      	console.log("Recibe comando  alarmaControler:",req.body.accion);
 	

	var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
	var LED = new Gpio(4, 'out'); //use GPIO pin 4, and specify that it is output

	LED.writeSync(1); //con 1 se prende el led


   const objetoRequest = {
      url: 'http://localhost:1339/alarma',
      form: {
        nombre: req.body.nombre,
        accion: req.body.accion,

      }
    };
request
      .post(objetoRequest)


      return res.send(req.body.nombre);

    }if(req.body.accion.localeCompare(str2)==0)
    {
      console.log("Recibe comando alarmaControler: ",req.body.accion);

	var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
	var LED = new Gpio(4, 'out'); //use GPIO pin 4, and specify that it is output
	LED.writeSync(0); // con 0 se apaga el led

  const objetoRequest = {
      url: 'http://localhost:1339/alarma',//Guarda en la api
      form: {
        nombre: req.body.nombre,
        accion: req.body.accion,

      }
    };
request
      .post(objetoRequest)
      return res.send(req.body.nombre);
    }
    else
    {
      console.log("envio una peticion incorrecta",req.body.nombre);
      return res.send('enviaste una peticion incorrecta');
    }

 

  },
};
