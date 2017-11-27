function compare(expected, received){
    for (var key in expected){
        var attrName = key;
        var attrValue = expected[key];
        if (received.hasOwnProperty(key)){
        	if (received[key] != attrValue)
        		return false;
        }
    }
    return true;
}

function compareExact(expected, received){
    return (prettify(expected) == prettify(received));
}

function compareWithTolerance(expected, received, mostDifferences){
	var misses = 0;

    for (var key in expected){
        var attrName = key;
        var attrValue = expected[key];
        if (received.hasOwnProperty(key)){
        	if (received[key] != attrValue)
        		misses ++;
        	if (misses > mostDifferences)
        		return false;
        }
    }
    return true;
}

