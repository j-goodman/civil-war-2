var pickRandom = (iterable) => {
    if (Array.isArray(iterable)) {
        return iterable[Math.floor(Math.random() * iterable.length)];
    } else {
        return pickRandom(Object.keys(iterable).map(key => {
            return iterable[key];
        }));
    }
}