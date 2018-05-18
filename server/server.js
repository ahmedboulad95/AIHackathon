var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());
var bodyParser = require('body-parser');
var PythonShell = require('python-shell');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

var router = express.Router();

var options = {
	mode: 'text'
	
}

router.get('/', function(req, res) {
	res.json({ message: 'hackathon'});
});

router.get('/topFiveCities', function(req,res) {
	options.args = [req.query.brand.replace(/['"]+/g, '')];
	console.log(req.query.brand);
	console.log(typeof req.query.brand);
	PythonShell.run('/pyscripts/topFiveCities.py', options, function(err, results) {
		if (err) throw err;
		results.splice(6,1);
		results.splice(0,1);
		console.log(results);
		res.json(results);
	});
});


router.get('/Store_prediction', function(req,res) {
        options.args = [req.query.brand.replace(/['"]+/g, '')];
        console.log(req.query.brand);
        console.log(typeof req.query.brand);
        PythonShell.run('/pyscripts/Store_prediction.py', options, function(err, results) {
                if (err) throw err;
                /*results.splice(6,1);
                results.splice(0,1);*/
                console.log(results);
                res.json(results);
        });
});

app.use('/api', router);
app.listen(port);
console.log('Magic happens on port ' + port);
