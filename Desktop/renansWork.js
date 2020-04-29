//This is where I will work on my stuff
/* Renan Charles-Pierre
 *3/22/2020
 */
//Sample lists
test = [
	['courseID', 'crn', 'department', 'courseNumber', 'courseID', 'courseDescription', 'credits', 'professoName'],
		['0', '1234', 'CSC', 'Python', 'learn python', '3', 'Krish P'],
			['1', '3456', 'CSC', 'C++', 'learn c++', '3', 'Simona D'],
				['2', '7891', 'CSC', 'Java', 'learn java', '3', 'JiangChenS'],
					['3', '1112', 'CSC', 'Intro to Web Dev', 'Learn the basics of web development', '3']
];

//The filter function
function readlist(word, list) {
	wordStr = word.toLowerCase();	
	for(i =0; i < list.length; i++){
		listStr = list[i].toString().toLowerCase();
		if ( listStr == wordStr) {
			return true;
		}
	}
	return false;
}

tan = test.filter(() => readlist('learn', test));	




// Only returns the elements that are true

function readList2D(word, list){
	arr = [];
	for(j = 0; j <= readList2D.length; j++){
		newList = list[j];
		ans = newList.filter(() => readlist(word, newList));  
		if (ans.length != 0) {
			arr += ans;
			console.log(ans);
		}
	}return arr;
}




 var items = [
   ['1', '2'],
     ['3', '4'],
       ['5', '3']
       ];

//newItems = items[1];
//console.log(Array.isArray(newItems));

console.log(readList2D('1', test));
