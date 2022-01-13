// Code your solution here

function findMatching(array, string) {
    return array.filter(function (elem) {
        return elem.toLowerCase() === string.toLowerCase();
    });
}

function fuzzyMatch(array, string) {
    const end = string.length
    return array.filter(function (elem) {
        return elem.slice(0, end) === string;
    });
}

function matchName(array, string) {
    return array.filter(function (elem) {
        return elem.name === string;
    })
}