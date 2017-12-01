function compare(expected, received){
    if (Array.isArray(received)){
        for (var i = 0; i < received.length; i ++){
            if (!compare(expected[i], received[i])){
                return false;
            }
        }
        return true;
    }
    for (var key in expected){
        var attrName = key;
        var attrValue = expected[key];
        if (received.hasOwnProperty(key)){
            if (Array.isArray(received[key])){
                if (!compare(received[key], attrValue))
                    return false;
            }
        	else if (received[key] != attrValue)
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
    if (Array.isArray(received)){
        for (var i = 0; i < received.length; i ++){
            if (!compare(expected[i], received[i])){
                misses ++;
            }
            if (misses > mostDifferences)
                return false;
        }
        return true;
    }
    for (var key in expected){
        var attrName = key;
        var attrValue = expected[key];
        if (received.hasOwnProperty(key)){
            if (Array.isArray(received[key])){
                if (!compare(received[key], attrValue))
                    misses ++;
                if (misses > mostDifferences)
                    return false;
            }
            else if (received[key] != attrValue)
                misses ++;
            if (misses > mostDifferences)
                return false;
        }
    }
    return true;
}

