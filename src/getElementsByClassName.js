// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
	return recursiveGEBCN(className, document.body);
};

var recursiveGEBCN = function(className, node) {
	var result = [];
	
	var myClassList = node.classList || [];
	for (var i = 0; i < myClassList.length; i++) {
		if (myClassList[i].indexOf(className) > -1) {
			result.push(node);
		}
	}

	var myChildNodes = node.childNodes || [];
	for (var j = 0; j < myChildNodes.length; j++) {
		var childRes = recursiveGEBCN(className, myChildNodes[j]);
		for (item in childRes) {
			result.push(childRes[item]);
		}
	}

	return result;
};