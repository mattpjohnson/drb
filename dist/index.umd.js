(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.drb = {})));
}(this, (function (exports) { 'use strict';

    function drb(formatter) {
        return function (input) {
            var tokens = formatter.tokenize(input);
            var translated = formatter.translate(tokens);
            return formatter.concat(translated);
        };
    }

    exports.drb = drb;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map
