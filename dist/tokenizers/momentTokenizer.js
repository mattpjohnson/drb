import { runTokenizer } from './runTokenizer';
export var momentTokenizer = function (input) {
    return fixTokensWithOrdinals(runTokenizer(input));
};
function fixTokensWithOrdinals(tokens) {
    var tokensWithOrdinals = ['DDD', 'D', 'd', 'M', 'Q', 'w', 'W'];
    for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];
        if (tokensWithOrdinals.indexOf(token) !== -1 && tokens[i + 1] === 'o') {
            tokens.splice(i, 2, token + 'o');
        }
    }
    return tokens;
}
//# sourceMappingURL=momentTokenizer.js.map