define(['config'],function(){
	/*var requireArr = new Array();
	var functionArr = new Array();
	requireArr[0] = "'jquery'";
	functionArr[0]  = "'$'";
	requireArr[1] = "'loadsh'";
	functionArr[1]  = "'_'";
	requireArr=requireArr.join(",");
	functionArr=functionArr.join(",");*/
	
    require(['jquery','loadsh'],function($,_){
    	/*$('#test').css("background-color","pink"); 
    	var arr = ['a','b','c','d']
    	var arr2 = _.chunk(arr,3);
    	console.log(arr2);*/
    	
    	/*var arr = [0, 1, false, 2, '', 3];
    	var arr2 = _.compact(arr,3);
    	console.log(arr2);*/
    	
    	/*var arr1 = [1, 2, 3];
    	var arr1 = [1, '2', 3];
    	var arr2 = [2,4];
    	var arr3 = _.difference(arr1,arr2);
    	console.log(arr3);*/
    	
    	/*var arr = [1, 2, 3];
    	var arr2 = _.drop(arr,2);
    	console.log(arr2);
    	
    	var arr = [1, 2, 3];
    	var arr2 = _.dropRight(arr,2);
    	console.log(arr2);*/
    	
    	//////////////////////////
    	var arr = [1, 2, 3];
    	_.dropRightWhile(arr,function(n){
    		return n > 1;
    	});
    	
		/*var users = [
//		  { 'user': 'lin', 'active': true },
		  { 'user': 'barney',  'active': true },
		  { 'user': 'fred',    'active': false },
		  { 'user': 'pebbles', 'active': true },
//		  { 'user': 'lin', 'active': false }
		];

//    	var result = _.pluck(_.dropRightWhile(users,{'user':'pebbles','active':false}),'user');
    	//var result = _.pluck(_.dropRightWhile(users, 'user',false), 'user');
    	
//    	var result = _.pluck(_.dropWhile(users, { 'user': 'barney', 'active': false }), 'user');
    	var result = _.pluck(_.dropRightWhile(users,'active'), 'user');
    	console.log(result);*/
    	
    	/*var array = [1,2,3];
    	_.fill(array,'a')
    	var res1 = _.fill(Array(3),'2')
    	var res2 = _.fill([4,6,8],'*',1,2);
    	console.log(array);
    	console.log(res1);
    	console.log(res2);*/
    	
    	/*var users = [
    		{ 'user': 'barney',  'active': false },
		    { 'user': 'fred',    'active': false },
			{ 'user': 'pebbles', 'active': true }
    	];*/
    	
    	/*var res1 = _.findIndex(users,function(chr){
    		return chr.user == 'barney';
    	});
    	console.log(res1);
    	
    	var res2 = _.findIndex(users,{ 'user': 'fred', 'active': false });
    	console.log(res2);
    	
    	var res3 = _.findIndex(users, 'active', false);
    	console.log(res3);
    	
    	var res4 = _.findIndex(users, 'active');
    	console.log(res4);*/
    	
    	/*var res1 = _.findLastIndex(users,function(chr){
    		return chr.user == 'barney';
    	});
    	console.log(res1);
    	
    	var res2 = _.findLastIndex(users,{ 'user': 'fred', 'active': false });
    	console.log(res2);
    	
    	var res3 = _.findLastIndex(users, 'active', false);
    	console.log(res3);
    	
    	var res4 = _.findLastIndex(users, 'active');
    	console.log(res4);*/
    	
    	/*var res1 = _.first([1,2,3]);
    	console.log(res1);
    	
    	var res2 = _.first([]);
    	console.log(res2);*/
    	
    	/*var res1 = _.indexOf([1,2,1,2],2);
    	console.log(res1);
    	
    	var res2 = _.indexOf([1,2,1,2],2,2);
    	console.log(res2);
    	
    	var res3 = _.indexOf([1,2,1,2],1,-3);
    	console.log(res3);
    	
    	var res4 = _.indexOf([1,1,2,2],2,true);
    	console.log(res4);*/
    	
    	/*var res1 = _.intersection([1, 2,3], [4, 2,3], [2, 1,3]);
    	console.log(res1);*/
    	
    	/*var res1 = _.lastIndexOf([1, 2, 1, 2], 2);
    	console.log(res1);
		// => 3
		
		// using `fromIndex`
		var res2 = _.lastIndexOf([1, 2, 1, 2], 2, 1);
		console.log(res2);
		// => 1
		
		// performing a binary search
		var res3 = _.lastIndexOf([1, 1, 2, 2], 2, true);
		console.log(res3);*/
		
		/*var array = [1, '2', 3, 1, 2, 3];
		var res1 = _.pull(array, 2, 3);
		console.log(res1);*/
		
		/*var array = [5, 10, 15, 20];
		var evens = _.pullAt(array, 1, 3);
		
		console.log(array);
		// => [5, 15]
		
		console.log(evens);
		// => [10, 20]
    	*/
    	
    	/*var array = [1, 2, 3, 4];
		var evens = _.remove(array, function(n) {
		  return n % 2 == 0;
		});
		
		console.log(array);
		// => [1, 3]
		
		console.log(evens);
		// => [2, 4]*/
		
		/*var array = [1, 2, 3, 4];
		var evens = _.remove(array, function(n) {
		  return n % 2 == 0;
		});
		
		console.log(array);
		// => [1, 3]
		
		console.log(evens);
		// => [2, 4]*/ 
		
		
/*		var users = [
		  { 'user': 'barney',  'active': false },
		  { 'user': 'fred',    'active': false },
		  { 'user': 'pebbles', 'active': true }
		];
		
		// using the `_.matches` callback shorthand
//		var res1 = _.remove(users, { 'user': 'barney', 'active': false });
//		console.log(res1);
//		console.log(users);
		
		// using the `_.matchesProperty` callback shorthand
//		var res2= _.remove(users, 'active', false);
//		console.log(res2);
//		console.log(users);
//		
		
		// using the `_.property` callback shorthand
		var res3= _.remove(users, 'active');
		console.log(res3);
		console.log(users);*/
		
		
		var arr1 = [30, 50];
		var res1 = _.sortedIndex(arr1, 40);
		// => 1
		console.log(arr1);
		console.log(res1);
		
		_.sortedIndex([4, 4, 5, 5], 5);
		// => 2
		
//		var dict = { 'data': { 'thirty': 30, 'forty': 40, 'fifty': 50 } };
		var dict = { 'data': { 'thirty': 30, 'forty': 40, 'fifty': 50 } };
		
		// using an iteratee function
		var res2 = _.sortedIndex(['thirty', 'forty'], 'fifty', function(word) {
		  return this.data[word];
		}, dict);
		console.log(dict);
		console.log(res2);
		// => 1
		
		// using the `_.property` callback shorthand
		_.sortedIndex([{ 'x': 30 }, { 'x': 50 }], { 'x': 40 }, 'x');
		// => 1
		
		
		/*_.takeRightWhile([1, 2, 3], function(n) {
		  return n > 1;
		});
		// => [2, 3]
		
		var users = [
		  { 'user': 'barney',  'active': true },
		  { 'user': 'fred',    'active': false },
		  { 'user': 'pebbles', 'active': false },
		  { 'user': 'lin', 'active': true }
		];
		
		// using the `_.matches` callback shorthand
		var res1 = _.pluck(_.takeRightWhile(users, { 'user': 'pebbles', 'active': false }), 'user');
		console.log(res1);
		// => ['pebbles']
		
		// using the `_.matchesProperty` callback shorthand
		var res2 = _.pluck(_.takeRightWhile(users, 'active', false), 'user');
		console.log(res2);
		// => ['fred', 'pebbles']
		
		// using the `_.property` callback shorthand
		var res3 =_.pluck(_.takeRightWhile(users, 'active'), 'user');
		console.log(res3);
		*/
		
		/*var res1 = _.union([1, 2], [4, 2], [2, 1]);
		console.log(res1);
		// => [1, 2, 4]*/
		
		/*var res1 = _.uniq([2, 1, 2]);
		console.log(res1);
		// => [2, 1]
		
		// using `isSorted`
		var res2 = _.uniq([1, 1, 2], true);
		console.log(res2);
		// => [1, 2]
		
		// using an iteratee function
		var res3 = _.uniq([1, 2.5, 1.5, 2], function(n) {
		  return this.floor(n);
		}, Math);
		console.log(res3);
		// => [1, 2.5]
		
		// using the `_.property` callback shorthand
		var res4 = _.uniq([{ 'x': 1 ,'y':1}, { 'x': 2 ,'y':1}, { 'x': 1 ,'y':1}], 'x');
		console.log(res4);
		// => [{ 'x': 1 }, { 'x': 2 }]*/

    });
});