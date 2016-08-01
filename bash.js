//console.log(Object.keys(process));
var command = require('./command.js');
process.stdout.write('promote > ');
var done = function(output,stdin){
	if(stdin.length===0){
	process.stdout.write(output);
	process.stdout.write("\nprompt > ");
	} else {
		var nextRun = stdin.shift();
		var inputs = nextRun.split(" ")
		
	}	


}

process.stdin.on('data',function(data){
	var cmdString = data.toString().trim();
	var inputs = cmdString.split(/\s*\|\s*/gi);
	var firstInput = inputs.shift();
	var firstCommand = firstInput.split(" ")[0];
	var firstFile = firstInput.split(" ").slice(1)
	var stdin = inputs;
	//console.log(firstFile);
	//process.stdout.write('You type: ' + str);
	if(firstCommand ==="pwd") command.pwd(stdin, firstFile,done);
	if(firstCommand ==="date") command.date(stdin, firstFile,done);
	if(firstCommand ==="ls") command.ls(stdin, firstFile,done);
	if(firstCommand ==="echo")command.echo(stdin, firstFile,done);
	if(firstCommand ==="cat") command.cat(stdin, firstFile,done);
	if(firstCommand ==="head") command.head(stdin, firstFile,done);
	if(firstCommand ==="tail") command.tail(stdin, firstFile,done);
	if(firstCommand ==="wc") command.wc(stdin, firstFile,done);
	if(firstCommand ==="curl") command.curl(stdin, firstFile,done);
});