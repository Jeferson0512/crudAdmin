const express = require('express'), //Hacemos un llamado a nuestro framework
    morgan = require('morgan'),
    app = express(),
    path = require('path'),
    { mongoose } = require('./database'),
    TecnicoRoutes = require('./routes/tecnico.routes'),
    cors = require('cors');

// Configuraciones
app.set('port', process.env.PORT || 3000); //En caso que el servidor tenga su propio puerto y en caso que no se corra en el port 3000

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

// Middleware
app.use(morgan('dev'));
app.use(express.json()); //Este recibimos en json
app.use(cors(corsOptions));//Con esto podemos comunicarnos entre puertos
app.use(express.static(path.join(__dirname, 'FrontEnd')));

//Routes
app.use('/api/tecnicos', TecnicoRoutes);

//Corriendo el servidor
app.listen(app.get('port'), () => {
    console.log('Server on port'+ app.get('port'));
});
