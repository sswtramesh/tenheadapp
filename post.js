var http = require('http');
const postData = JSON.stringify({first_name:'ramesh chauhan'});
const options = {
	hostname:'mockbin.com',
	port:80,
	path:'/request?foo=ramesh&foo=chauhan',
	method:'POST',
	headers:{
		'Content-Type':'application/x-www-form-urlencoded',
		'Content-Length':Buffer.byteLength(postData)
	}
};
var request = http.request(options,(res)=>{
	res.on('data',()=>{
		console.log(data);
	});
	res.on('end',()=>{
		console.log('data is end ');
	});
	res.on('error',(error)=>{
		console.log(error);
	});
}).on('error',(error)=>{
	console.log(error);
});