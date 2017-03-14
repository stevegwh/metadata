const express = require('express');
const bodyParser= require('body-parser');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
var path = require('path');

const app = express();

app.set('view engine', 'ejs')

app.listen(process.env.PORT);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/", (req, res)=> {
  res.render('index.ejs', {filesize: null});
})

app.post('/file', upload.single('userFile'), function(req,res){
  res.json({size: JSON.stringify(req.file.size)});

	res.status(204).end();

});
