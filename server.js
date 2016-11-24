var express = require('express');
var path = require('path'); // used for working with file system paths
var bodyParser = require('body-parser');

// Routing Paths
var index =require('./routes/index');
var tasks =require('./routes/tasks');

var port = 3000;

var app = express();

// VIEW ENGINE
app.set('views', path.join(__dirname, 'views'));  // views in 'views' folder
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static Folder (where angular stuff goes)
app.use(express.static(path.join(__dirname, 'client')));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Routes
app.use('/', index);
app.use('/api', tasks);

app.listen(port, function(){
  console.log('Server Listening on port ' + port);
});
