const http = require('http');
const express = require('express');
const cors = require('cors');
const Openpay = require('openpay');
const openpay = new Openpay('mzzqfji4nm9zkiwtreck', 'sk_6f4732d63b6945c6a5bdcc4c4f1b062b');
// Inicio de servidor 
var app = express();
//const server = http.createServer(app);
// Configuración de la app
app.use(express.json());
app.use(cors());
// Rutas
app.post('/api/login', cors(), async (req, res) => {
    const { user, password } = req.body;
    if(user === 'admin' && password === 'admin') {
        res.status(200).send(true);
    } else {
        res.status(400).send(false);
    }
});
app.post('/api/user', cors(), async (req, res) => {
    const { name, email, last_name, city, state, address, postal_code, phone_number  } = req.body;
    const newCustomer = {
        name,
        email,
        last_name,
        address:{
          city,
          state,
          line1:address,
          line2:"",
          postal_code,
          country_code:"MX"
        },
        phone_number
      };       
      openpay.customers.create(newCustomer, function(error, body) {
          console.log(error);    // null if no error occurred (status code != 200||201||204)
          console.log(body);     // contains the object returned if no error occurred (status code == 200||201||204)
          if(error){
              res.status(400).send({error, body})
          }
          else {
              res.status(200).send(body);
          }
      });
});
app.get('/api/users', cors(), async (req, res) => {
      openpay.customers.list({}, function(error, list) {
        if(error){
            res.status(400).send({error, list})
        }
        else {
            res.status(200).send(list);
        }
      });
});
//server.listen(PORT, () => console.log(`app corriendo en el puerto ${PORT}`));
const puerto = 4000;
app.listen(puerto, function(){
    console.log("servidor OK");
})