
var PythonShell = require('python-shell');


var options = {
	mode: 'text',
	
}
options.args = ["Home Depot"];
PythonShell.run('/pyscripts/topFiveCities.py', options, function(err, results) {
	if (err) throw err;
	results.splice(6,1);
	results.splice(0,1);
	console.log(results);

});
