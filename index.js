var cool = require('cool-ascii-faces');
var express = require('express');
var app = express();
var pg = require('pg');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/db', function (request, response) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM test_table', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.render('pages/db', {results: result.rows} ); }
    });
  });
});

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/cool', function(request, response) {
  response.send(cool());
});

app.get('/message', function(request, response){
  var mess = "There is prolly a problem with ya database but we wouldn't know because we don't have administrator privileges..."
  var perc = "There is a "
  var ent = "% chance that someone is gonna fix this"
  response.send(mess + "   " + perc + Math.floor(Math.random()*101) + ent);
});

app.get('/fakework', function(request, response){
  var other = "var express = require('express'); \nvar path = require('path');\nvar session = require('express-session');\nvar bodyParser = require('body-parser');\nvar methodOverride = require('method-override');\n\tapp.set('views', path.join(__dirname, 'views'));\n\tapp.set('view engine', 'jade');\n\n\tapp.use(logger('dev')); \n\tapp.use(bodyParser.json());";
  var jaunt = "\nreach(main.loop) = new [] <String>();\n---------------------------------------------------------------\n...complete inventory...\n\tapp.create(ncarb-messages);\n{([{([O])}])}\n---> 1+1=2 <--- //according to Carbo IslaMonheim Equation\nvar int1, int2;\nsum(int1, int2);\n\tassert sum(1, 1) = 2;\n\nif (V=IR)\n\tapp.set('voltage equals current multiplied by resistance'); \n___________________________________________________________________\n\trun.app.ncarb-messsages\n\t\treturn = \"Error accessing database\"";
  var dank = "\n\nrelay...\n******************start correlation********************\n|| && || = {/.}\nvar bool\nif (console.check(eiffelDatabase))\n\tbool = true;\nelse\n\tbool = false;\nsystem.out.println('Zawad is a fool');\n31@438$83918#\n\ntransfering.... \n\tcompiling database --n eiffelDatabase;\nreturn() \ninstall suh dood-- XX !!ERROR!! declined\napp.use(heroku('express'));\n==============================================================\n01001010 01110111 01011011 01000111\n\n";
  var random = "♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦\nvar under = resist('underdog');\n\t{CRUD}\n Create == Instatiate API\n Read == GET message\n Update == Maintain app \n Delete == TERMINATE\n\n"
  response.send(random+other+dank+jaunt);
});

app.get('/zawad', function(request, response){
  var msg = ("Zawad ")
  var msg1 = ("Is Childish")
  var msg2 = ("Islam")
  var msg3 = ("Islame")
  var msg4 = ("Is Brown")
  var msg5 = ("Is An Uncooked Bagel")
  var msg6 = ("Was Born In Bangladesh")
  var msg7 = ("Is A Wyntern")
  var msg8 = ("Is A Bad Jaunt")
  var msg9 = ("Is Grinding")
  var msg10 = ("Is GAYYYYYYYY")
  var msg11 = ("Was Born In Queens ")
  var msg12 = ("Is The GOAT")
  var msg13 = ("Looks Like A Goat")
  var messages = [msg1, msg2, msg3, msg4, msg5, msg6, msg7, msg8, msg9, msg10, msg11, msg12, msg13]
  var i = Math.floor(Math.random()*13)
  response.send(msg + messages[i]);
});

app.get('/times', function(request, response) {
    var result = ''
    var times = process.env.TIMES || 5
    for (i = 0; i < times; i++)
      result += i + ' ';
  response.send(result);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
