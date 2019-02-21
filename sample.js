const EventEmiter = require('events');

class Job extends EventEmiter{
	constructor(obj){
		super(obj);
		this.on('start',()=>{
			this.process();
		});
	}

	process(){
		setTimeout(()=>{
			this.emit('done',{'completed':new Date()});	
		},1000);
		
	}
}

module.exports = Job;

// job  = new Job();
// job.on('done',function(date){
// 	console.log('job is done at the time ',date);
// });

// job.emit('done',new Date()); 
// job.removeAllListeners();

// class Knock extends EventEmiter{}

// door = new Knock();
// door.on('knock',function(){
// 	console.log("Who's there?");
// });

// door.on('knock',function(){
// 	console.log("Go away");
// });


// door.emit('knock');
// door.emit('knock');
// door.removeAllListeners();
