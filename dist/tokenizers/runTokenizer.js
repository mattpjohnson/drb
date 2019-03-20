export var runTokenizer = function (input) {
    var tokens = [];
    if (input.length === 0) {
        return tokens;
    }
    var currentToken = input[0];
    for (var i = 1; i < input.length; i++) {
        var letter = input[i];
        if (letter !== currentToken[0]) {
            tokens.push(currentToken);
            currentToken = '';
        }
        currentToken += letter;
    }
    tokens.push(currentToken);
    return tokens;
};
//# sourceMappingURL=runTokenizer.js.map