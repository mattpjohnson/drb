(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.momentFormatter = {})));
}(this, (function (exports) { 'use strict';

    var basicConcatenator = function (tokens) {
        return "(?:" + tokens.join(')(?:') + ")";
    };

    function lookupTranslator(lookup) {
        return function (tokens) {
            return tokens.map(function (token) { return lookup[token] || token; });
        };
    }
    function getNumbers(start, end) {
        var numbers = [];
        for (var i = start; i <= end; i++) {
            numbers.push(i);
        }
        return numbers;
    }
    function getNumbersWithOrdinalIndicators(start, end) {
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

    var toRegexRange = require('to-regex-range');
    var timeZones = 'ACDT|ACST|ACT|ACWST|ADT|AEDT|AEST|AFT|AKDT|AKST|ALMT|AMST|AMT|ANAT|AQTT|ART|AST|AWST|AZOST|AZOT|AZT|BDT|BIOT|BIT|BOT|BRST|BRT|BST|BTT|CAT|CCT|CDT|CEST|CET|CHADT|CHAST|CHOT|CHOST|CHST|CHUT|CIST|CIT|CKT|CLST|CLT|COST|COT|CST|CT|CVT|CWST|CXT|DAVT|DDUT|DFT|EASST|EAST|EAT|ECT|EDT|EEST|EET|EGST|EGT|EIT|EST|FET|FJT|FKST|FKT|FNT|GALT|GAMT|GET|GFT|GILT|GIT|GMT|GST|GYT|HDT|HAEC|HST|HKT|HMT|HOVST|HOVT|ICT|IDLW|IDT|IOT|IRDT|IRKT|IRST|IST|JST|KALT|KGT|KOST|KRAT|KST|LHST|LINT|MAGT|MART|MAWT|MDT|MET|MEST|MHT|MIST|MIT|MMT|MSK|MST|MUT|MVT|MYT|NCT|NDT|NFT|NOVT|NPT|NST|NT|NUT|NZDT|NZST|OMST|ORAT|PDT|PET|PETT|PGT|PHOT|PHT|PKT|PMDT|PMST|PONT|PST|PYST|PYT|RET|ROTT|SAKT|SAMT|SAST|SBT|SCT|SDT|SGT|SLST|SRET|SRT|SST|SYOT|TAHT|THA|TFT|TJT|TKT|TLT|TMT|TRT|TOT|TVT|ULAST|ULAT|UTC|UYST|UYT|UZT|VET|VLAT|VOLT|VOST|VUT|WAKT|WAST|WAT|WEST|WET|WIT|WST|YAKT|YEKT';
    var tokenLookup = {
        M: toRegexRange('1', '12'),
        Mo: "" + getNumbersWithOrdinalIndicators(1, 12).join('|'),
        MM: toRegexRange('01', '12'),
        MMM: 'Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec',
        MMMM: 'January|February|March|April|May|June|July|August|September|October|November|December',
        Q: '[1-4]',
        Qo: getNumbersWithOrdinalIndicators(1, 4).join('|'),
        D: toRegexRange('1', '31'),
        Do: getNumbersWithOrdinalIndicators(1, 31).join('|'),
        DD: toRegexRange('01', '31'),
        DDD: toRegexRange('1', '365'),
        DDDo: getNumbersWithOrdinalIndicators(1, 365).join('|'),
        DDDD: toRegexRange('001', '365'),
        d: '[0-6]',
        "do": getNumbersWithOrdinalIndicators(0, 6).join('|'),
        dd: 'Su|Mo|Tu|We|Th|Fr|Sa',
        ddd: 'Sun|Mon|Tue|Wed|Thu|Fri|Sat',
        dddd: 'Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday',
        e: '[0-6]',
        E: '[1-7]',
        w: toRegexRange('1', '53'),
        wo: getNumbersWithOrdinalIndicators(1, 53).join('|'),
        ww: toRegexRange('01', '53'),
        W: toRegexRange('1', '53'),
        Wo: getNumbersWithOrdinalIndicators(1, 53).join('|'),
        WW: toRegexRange('01', '53'),
        YY: '\\d{2}',
        YYYY: '\\d{4}',
        Y: '\\d{4}|\\+\\d{5,}',
        gg: '\\d{2}',
        gggg: '\\d{4}',
        GG: '\\d{2}',
        GGGG: '\\d{4}',
        A: 'AM|PM',
        a: 'am|pm',
        H: toRegexRange('0', '23'),
        HH: toRegexRange('00', '23'),
        h: toRegexRange('1', '12'),
        hh: toRegexRange('01', '12'),
        k: toRegexRange('1', '24'),
        kk: toRegexRange('01', '24'),
        m: toRegexRange('0', '59'),
        mm: toRegexRange('00', '59'),
        s: toRegexRange('0', '59'),
        ss: toRegexRange('00', '59'),
        S: '\\d',
        SS: '\\d{2}',
        SSS: '\\d{3}',
        SSSS: '\\d{4}',
        SSSSS: '\\d{5}',
        SSSSSS: '\\d{6}',
        SSSSSSS: '\\d{7}',
        SSSSSSSS: '\\d{8}',
        SSSSSSSSS: '\\d{9}',
        z: timeZones,
        zz: timeZones,
        Z: '(?:\\+|-)(?:0\\d|1[0-2])\\:00',
        ZZ: '(?:\\+|-)(?:0\\d|1[0-2])00',
        X: toRegexRange('0000000000', '2147483647'),
        x: toRegexRange('0000000000000', '2147483647000')
    };
    function combineTokens() {
        var tokens = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            tokens[_i] = arguments[_i];
        }
        return ('(?:' + tokens.map(function (token) { return tokenLookup[token] || token; }).join(')(?:') + ')');
    }
    tokenLookup['LT'] = combineTokens('h', ':', 'mm', ' ', 'A');
    tokenLookup['LTS'] = combineTokens('h', ':', 'mm', ':', 'ss', ' ', 'A');
    tokenLookup['L'] = combineTokens('MM', '/', 'DD', '/', 'YYYY');
    tokenLookup['l'] = combineTokens('M', '/', 'D', '/', 'YYYY');
    tokenLookup['LL'] = combineTokens('MMMM', ' ', 'D', ', ', 'YYYY');
    tokenLookup['ll'] = combineTokens('MMM', ' ', 'D', ', ', 'YYYY');
    tokenLookup['LLL'] = combineTokens('MMMM', ' ', 'D', ', ', 'YYYY', ' ', 'LT');
    tokenLookup['lll'] = combineTokens('MMM', ' ', 'D', ', ', 'YYYY', ' ', 'LT');
    tokenLookup['LLLL'] = combineTokens('dddd', ', ', 'MMMM', ' ', 'D', ', ', 'YYYY', ' ', 'LT');
    tokenLookup['llll'] = combineTokens('ddd', ', ', 'MMM', ' ', 'D', ', ', 'YYYY', ' ', 'LT');
    var momentTranslator = lookupTranslator(tokenLookup);

    var runTokenizer = function (input) {
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

    var momentTokenizer = function (input) {
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

    var momentFormatter = {
        concat: basicConcatenator,
        tokenize: momentTokenizer,
        translate: momentTranslator
    };

    exports.momentFormatter = momentFormatter;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=momentFormatter.js.map
