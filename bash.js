//console.log(Object.keys(process));
var command = require('./command.js');
process.stdout.write('promote > ');
function done(output){
	if(inputs.length===0){
	process.stdout.write(output);
	process.stdout.write("\nprompt > ");
	} else {
		var secondCommand,secondFile;
		var secondInput = inputs.shift().split(" ");
		if(secondInput.length>1) {
			secondCommand = secondInput[0];
			secondFile = secondInput[1];
		}else{ //secondInput.length ===1
			secondCommand = secondInput;
			secondFile = null;
		}
		var stdin = output;
		//var inputs = nextRun.split(" ")
		command[secondCommand](stdin,secondFile,done);

	}	


}

process.stdin.on('data',function(data){
	var cmdString = data.toString().trim();
	inputs = cmdString.split(/\s*\|\s*/gi);  //seting inputs to global
	//console.log(inputs);
	var firstInput = inputs.shift();
	var firstCommand = firstInput.split(" ")[0];
	var firstFile = firstInput.split(" ").slice(1)
	var stdin = null;
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