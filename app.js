var express = require('express');
var exphbs = require('express-handlebars');
var sass = require('node-sass');
var path = require('path');

var app = express();

//View Engine: HandleBars
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({
  defaultLayout: 'index'
}));
app.set('view engine', 'handlebars');

//Use Sass
app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true,
  sourceMap:true
}));


app.use(express.static(path.join(__dirname, 'public')));

var routes = require('./routes/index');
app.use(routes);

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function() {
  console.log('Server started on port ' + app.get('port'));
});
