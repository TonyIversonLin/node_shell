var startTime = new Date;

setTimeout(function () {
  var endTime = new Date;
  console.log('Time elapsed: ', endTime - startTime, 'ms');
}, 1500);

while (new Date - startTime < 1000) {};