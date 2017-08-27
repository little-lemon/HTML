/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-08-26 19:11:53
 * @version $Id$
 */

//console.log('Helle Nodejs');
//异步方法读取
/*var fs = require('fs');
fs.readFile('readme','utf-8',function(err,data){
	if(err){
		console.error(err);
	}else{
		console.log(data);
	}
});
*/

//同步方法读取
var fs=require('fs');
var data = fs.readFileSync('readme','utf-8');
console.log(data);