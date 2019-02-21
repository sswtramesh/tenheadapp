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
