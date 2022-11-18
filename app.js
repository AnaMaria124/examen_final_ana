const { json } = require('express');
const express = require('express'); //----primer punto invocamos express
const app = express();

// app.get('/',(req, res)=>{
//   res.send('Hola')
// })

app.set('view engine', 'ejs'); //----Segundo puto invocamos nuestro motor de plantilla

app.use(express.urlencoded({extended:false}))

app.use(express(json))

app.use('/', require('./router'));

app.listen(5000,()=>{
   console.log('SERVER corriendo en http://localhost:5000');
});