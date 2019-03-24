export function lookupTranslator(lookup) {
    return function (tokens) {
        return tokens.map(function (token) { return lookup[token] || token; });
    };
}
export function getNumbers(start, end) {
    var numbers = [];
    for (var i = start; i <= end; i++) {
        numbers.push(i);
    }
    return numbers;
}
export function getNumbersWithOrdinalIndicators(start, end) {
    return getNumbers(start, end).map(function (i) { return i + getOrdinalIndicator(i); });
}
function getOrdinalIndicator(num) {
    if (num % 10 === 1 && num % 100 !== 11) {
        return 'st';
    }
    if (num % 10 === 2 && num % 100 !== 12) {
        return 'nd';
    }
    if (num % 10 === 3 && num % 100 !== 13) {
        return 'rd';
    }
    return 'th';
}
//# sourceMappingURL=helpers.js.map