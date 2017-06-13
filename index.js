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
  var mess = "Access to this database is offline.   :("
  var sorry = "   Sorry for the inconvenience."
  var pass = "    To pass the time feel free to try to guess the number between 1-100 after you refresh the page :  "
  var or = ".   Or if that's too hard, here is a number between 1-10 : "
  var maybe = ".  Maybe you are feeling lucky, guess the number between 1-1000 : "

  response.send(mess + sorry + "                " + pass + Math.floor(Math.random()*100 + 1) + or + Math.floor(Math.random()*10 + 1) + maybe + Math.floor(Math.random()*1000+1));
});

app.get('/messages', function(request, response){
  var mess = "There is prolly a problem with ya database but we wouldn't know because we don't have administrator privileges..."
  var perc = "There is a "
  var ent = "% chance that someone is gonna fix this"
  response.send(mess + "   " + perc + Math.floor(Math.random()*101) + ent);
});

app.post('/message', function(request, response){
  var msg = "An error occurred with the database. "
  var msg1 = ("Please remain calm, G is bound to get someone on this.")
  var msg2 = ("Count to 397,640 and maybe the issue will be solved by then.")
  var msg3 = ("Blame the wynterns for the inconvenience.")
  var msg4 = ("Dang that's too bad, we'll get to the bottom of this")
  var msg5 = ("We're gonna take our time because deadlines are demeaning.")
  var msg6 = ("We have a bad case of the Mondays but it will be fixed eventually.")
  var msg7 = ("Oh well.")
  var msg8 = ("Sucks to suck.")
  var msg9 = ("My girl said her parents weren't home, I'm sure you understand.")
  var msg10 = ("Now go on with your life, nothing to see here.")
  var msg11 = ("Don't be mad at us I pinky promise we'll do better.")
  var msg12 = ("We might have fixed this if we had administrator rights.")
  var msg13 = ("Don't fret, Zawad is an uncooked bagel")
  var messages = [msg1, msg2, msg3, msg4, msg5, msg6, msg7, msg8, msg9, msg10, msg11, msg12, msg13]
  var i = Math.floor(Math.random()*13)

  var canConnect = false;
  var conn = null;
  try{
      conn = DriverManager.getConnection("jdbc:mysql://localhost/");
      canConnect = true;
  }catch (err){
     canConnect = false;
  }

  if (!canConnect){
    response.send(msg + messages[i]);
  }

  if (canConnect){
    response.send("database is working");
  }

})

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
  var msg10 = ("Is Grinding On Another Dude")
  var msg11 = ("Was Born In Queens ")
  var msg12 = ("Is The GOAT")
  var msg13 = ("Looks Like A Goat")
  var messages = [msg1, msg2, msg3, msg4, msg5, msg6, msg7, msg8, msg9, msg10, msg11, msg12, msg13]
  var i = Math.floor(Math.random()*13)
  response.send(msg + messages[i]);
});

app.get('/motivation', function(request, response){
  var msg1 = ("You miss 100% of the shots you don't take.")
  var msg2 = ("Sometimes the thing that is holding you back is all in your head.")
  var msg3 = ("Work like you don't need the money. Love like you've never been hurt. Dance like nobody's watching.")
  var msg4 = ("Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.")
  var msg5 = ("Zawad Is An Uncooked Bagel")
  var msg6 = ("Keep your eyes on the stars, and your feet on the ground.")
  var msg7 = ("Learn to enjoy every minute of your life. Be happy now. Don't wait for something outside of yourself to make you happy in the future. Think how really precious is the time you have to spend, whether it's at work or with your family. Every minute should be enjoyed and savored.")
  var msg8 = ("Today I choose life. Every morning when I wake up I can choose joy, happiness, negativity, pain... To feel the freedom that comes from being able to continue to make mistakes and choices - today I choose to feel life, not to deny my humanity but embrace it.")
  var msg9 = ("The biggest adventure you can take is to live the life of your dreams.")
  var msg10 = ("I cannot even imagine where I would be today were it not for that handful of friends who have given me a heart full of joy. Let's face it, friends make life a lot more fun.")
  var msg11 = ("The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time.")
  var msg12 = ("In school, you're taught a lesson and then given a test. In life, you're given a test that teaches you a lesson.")
  var msg13 = ("Infuse your life with action. Don't wait for it to happen. Make it happen. Make your own future. Make your own hope. Make your own love. And whatever your beliefs, honor your creator, not by passively waiting for grace to come down from upon high, but by doing what you can to make grace happen... yourself, right now, right down here on Earth.")
  var msg14 = ("Success is getting what you want. Happiness is wanting what you get.")
  var msg15 = ("A truly strong person does not need the approval of others any more than a lion needs the approval of sheep.")
  var msg16 = ("The ones who are crazy enough to think they can change the world, are the ones who do.")
  var msg17 = ("The question isn’t who is going to let me; it’s who is going to stop me.")
  var msg18 = ("It does not matter how slowly you go, so long as you do not stop.")
  var msg19 = ("You don’t have to be great to start, but you have to start to be great.")
  var msg20 = ("When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down “happy”. They told me I didn’t understand the assignment, and I told them they didn’t understand life.")
  var msg21 = ("The key to happiness is not to change who you are to please other people, but to find people who don't want you to change.")
  var messages = [msg1, msg2, msg3, msg4, msg5, msg6, msg7, msg8, msg9, msg10, msg11, msg12, msg13, msg14, msg15, msg16, msg17, msg18, msg19, msg20, msg21]
  var i = Math.floor(Math.random()*21)
  response.send(messages[i]);
});

app.get('/sound', function(request, response) {
  //response.send("sound");
  this.onload = function (){
    var self = new webkitAudioContext("cow_moo1")
    //self.location="cow_moo1.wav"
    //var sound = new (window.AudioContext)
    self.play();
  };
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

