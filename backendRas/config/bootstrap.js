/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also do this by creating a hook.
 *
 * For more information on bootstrapping your app, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function(done) {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  // if (await User.count() > 0) {
  //   return done();
  // }
  //
  // await User.createEach([
  //   { emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
  //   { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
  //   // etc.
  // ]);
  // ```

  // Don't forget to trigger `done()` when this bootstrap function's logic is finished.
  // (otherwise your server will never lift, since it's waiting on the bootstrap)


     // console.log('Enviar datos');
const request=require('request');
var Gpio = require('onoff').Gpio,
getvalue=9;
  buzzer = new Gpio(18, 'out'),
  pir = new Gpio(17, 'in', 'both');

pir.watch(function(err, value) {
//console.log('valor de value',value);
getvalue=value;

  if (err) exit();
  buzzer.writeSync(value);
  //console.log('Intruder detected ');
getvalue=value;

  if(value == 1)  
//console.log('enviar mail');
getvalue=value;
//console.log('valor de get value',getvalue);

const objetoRequest1 = {
      url: 'http://localhost:1339/SensorMagneticoI',
      form: {
        valor: getvalue,

      }
    };
 request
      .post(objetoRequest1)
});


function exit() {
  buzzer.unexport();
  pir.unexport();
  process.exit();
}

  return done();

};
