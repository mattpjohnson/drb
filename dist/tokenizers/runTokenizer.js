export var runTokenizer = function (input) {
    if (input.length === 0) {
        return [];
    }
    var tokens = [];
    var start = 0;
    var end;
    for (end = 1; end < input.length; end++) {
        if (input[start] !== input[end]) {
            tokens.push(input.slice(start, end));
            start = end;
        }
    }
    tokens.push(input.slice(start, end));
    return tokens;
};
//# sourceMappingURL=runTokenizer.js.map