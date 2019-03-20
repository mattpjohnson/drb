export function drb(formatter) {
    return function (input) {
        var tokens = formatter.tokenize(input);
        var translated = formatter.translate(tokens);
        return formatter.concat(translated);
    };
}
//# sourceMappingURL=index.js.map