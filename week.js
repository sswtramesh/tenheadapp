var Job = require('./job.js');

var week = new Job();

week.on('done',function(work){
	console.log('weekly job done',work.completed);
});

week.emit('start');
