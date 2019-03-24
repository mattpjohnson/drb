export var basicConcatenator = function (tokens) {
    return "(?:" + tokens.join(')(?:') + ")";
};
//# sourceMappingURL=basicConcatenator.js.map