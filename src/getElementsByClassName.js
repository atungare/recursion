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
	var myClassList = node.classList;
	var myChildNodes = node.childNodes;

	for (elem in myClassList) {
		if (elem.indexOf(className) > -1) {
			result.push(elem);
		}
	}

	for (child in myChildNodes) {
		var childRes = recursiveGEBCN(className, child);
		for (item in childRes) {
			result.push(item);
		}
	}

	return result;
};