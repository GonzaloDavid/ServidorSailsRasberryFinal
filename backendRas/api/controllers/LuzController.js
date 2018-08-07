/**
 * LuzController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
//var led = require('Led');
module.exports = {
  compare: function(req, res) {
    //0 si es igual
    //-1 si no es igual
    var str1="encender";
    var str2="apagar";
    const request = require('request');

if(req.body.accion.localeCompare(str1)==0)
    {
      	console.log("Recibe comando luzControler: ",req.body.accion);
 	

	var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
	var LED = new Gpio(4, 'out'); //use GPIO pin 4, and specify that it is output
	
    	LED.writeSync(1); //set pin state to 1 (turn LED on)
  	

   const objetoRequest = {
      url: 'http://localhost:1339/luz',
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
      console.log("Recibe comando  luzControler:",req.body.accion);

	var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
	var LED = new Gpio(4, 'out'); //use GPIO pin 4, and specify that it is output
	
    	LED.writeSync(0); //set pin state to 1 (turn LED on)


  const objetoRequest = {
      url: 'http://localhost:1339/luz',
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

