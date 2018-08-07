/**
 * SensorMagneticoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

guardarEstado: function(req, res) {
    //0 si es igual
    //-1 si no es igual
    var str="1";
    var str1="0";
    const request = require('request');
console.log("------------------------ ");
console.log("recibe valor ",req.body.valor);
console.log("------------------------ ");
    if(req.body.valor.localeCompare(str)==0)
    {
      	//console.log("compara 1= ",req.body.valor);
 
    } if(req.body.valor.localeCompare(str1)==0)
    {  	
	//console.log("compara 0= ",req.body.valor);
   const objetoRequest = {
      url: 'http://localhost:1339/SensorMagnetico',
      form: {
        valor: 'Interrupcion',

      }
}
    
request
      .post(objetoRequest)

      return res.send(req.body.valor);

    }else
    {
      console.log("enviaron una peticion incorrecta, valor que envio fue:",req.body.valor);
      return res.send('enviaste una peticion incorrecta');
    }
  },
};

