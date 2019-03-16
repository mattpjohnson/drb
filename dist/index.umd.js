(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.nodeTypeScriptBoilerplate = {})));
}(this, (function (exports) { 'use strict';

    function sum(a, b) {
        return a + b;
    }

    function product(a, b) {
        return a * b;
    }

    exports.sum = sum;
    exports.product = product;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map
