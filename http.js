var http = require('https');

// const url = 'http://nodeprogram.com';
const url = 'https://www.google.com/';
http.get(url,function(res){
	let c = 0;
	res.on('data',(data)=>{
		c++;
		console.log(data.toString('utf8'));
	});
	res.on('end',()=>{
		console.log('response has ended with ',c);
	});
}).on('error',(error)=>{
	console.log(error.message);
});