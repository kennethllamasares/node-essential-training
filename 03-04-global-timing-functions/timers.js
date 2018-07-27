var waitTime = 3000;
var waitInterval = 100;
var currentTime = 0;
var percentWaited = 0;

console.log('Wait for it');

function writeWaitingPercent(p) {
	process.stdout.clearLine();
	process.stdout.cursorTo(0);
	process.stdout.write(`waiting ... ${p}%`);
}

var interval = setInterval(function () {
	currentTime += waitInterval;
	percentWaited = Math.floor((currentTime/waitTime) * 100);
	writeWaitingPercent(percentWaited);
}, waitInterval);

setTimeout(function () {
	clearInterval(interval);
	writeWaitingPercent(100);
	process.stdout.write('\nDone\n');
}, waitTime);

writeWaitingPercent(percentWaited);
