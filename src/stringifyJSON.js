// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
	var result;
	var typ = typeof(obj);

	if (typ === 'function' || typ === 'undefined') {
		result = "";
	} else if (obj === null){
		result = "null";

	} else if (Array.isArray(obj)) {
		var toJoin = [];
		for (var i = 0; i < obj.length; i++) {
			toJoin.push(stringifyJSON(obj[i]));
		}
		result = "[" + toJoin.join(",") + "]";

	} else if (typ === 'object') {
		var toJoin = [];
		for (var i in obj) {
			var myTyp = typeof(obj[i]);
			if (myTyp != 'function' && myTyp != 'undefined') {
		    toJoin.push('"' + i + '":' + stringifyJSON(obj[i]));
			}
    }
    result = "{" + toJoin.join(",") + "}";

	} else if (typ === 'number' || typ === 'boolean') {
		result = obj.toString();

	} else if (typ === 'string') {
		result = '"' + obj.toString() + '"';
	}

	return result;
};
