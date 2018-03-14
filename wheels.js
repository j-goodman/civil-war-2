window.wheels = {};

// Iterable methods
wheels.random = iterable => {
    if (Array.isArray(iterable)) {
        return iterable[Math.floor(Math.random() * iterable.length)];
    } else {
        return wheels.random(Object.keys(iterable).map(key => {
            return iterable[key];
        }));
    }
}

// String methods
wheels.replaceChar = (string, position, char) => {
    return string.slice(0, position) + char + string.slice(position + 1, string.length);
}

wheels.switchChar = (string, firstPlace, secondPlace) => {
    let second = string[secondPlace];
    string = wheels.replaceChar(string, secondPlace, string[firstPlace]);
    return wheels.replaceChar(string, firstPlace, second);
}
