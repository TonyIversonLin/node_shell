var fs = require('fs');
var request = require('request');


module.exports = {
	pwd:  function(stdin,file,done){
		var output = process.env.PWD;
		done(output);
	},
	date: function(stdin,file,done) {
		var time = new Date();
		var output = time.toString();
		done(output);
	},
	ls: function(stdin,file,done){
		var output = "";
		fs.readdir('.', function(err, files) {
  			if (err) throw err;
  			files.forEach(function(file) {
    			output += (file.toString() + "\n");
  			})
  			done(output);
		});
	},
	echo: function(stdin,file,done) {
		var output = "";
		var passback = file.join(' ');
		if (passback.split('')[0] === "$") {
			var env = file[0].split('') 
			env.shift();
			var envProp = env.join('');
			output = process.env[envProp];
		} else {
			output = passback;
		}
		done(output);
	},
	cat: function(stdin,file,done){
		fs.readFile(file[0],function(err,data){
			if(err){
				return console.error(err);
			}
			var output = data.toString();
			done(output);
		});
	},
	head: function(stdin,file,done){
		fs.readFile(file[0],function(err,data){
			if(err){
				return console.error(err);
			}
			var docum = data.toString().split("\n");
			var output = "";
			for(var i=0;i<5;i++) output+=(docum[i]+"\n");
			done(output.trim());
			});
	},
	tail: function(stdin,file,done){
		var output = "";
		fs.readFile(file[0],function(err,data){
			if(err){
				return console.error(err);
			}
			var docum = data.toString().split("\n");
			for(var i=docum.length - 5;i<docum.length;i++) output+=(docum[i]+"\n");
			done(output.trim())
		});
	},
	wc: function(stdin,file,done) {
		var output = "";
		fs.readFile(file[0],function(err,data){
			if(err){
				return console.error(err);
			}
			var output = data.toString().split("\n").length.toString()
			done(output)
		});
	},
	curl: function(stdin,file,done){
		var output = "";
		request(file[0], function (error, response, body) {
  			if (!error && response.statusCode == 200) {
    		output = body;
    		}
			done(output);
		});
	}
}