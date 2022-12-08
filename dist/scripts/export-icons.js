"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var path = require('path');
var fs = require('fs');
var camelSentence = function (str) {
    return (' ' + str)
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, function (match, chr) { return chr.toUpperCase(); });
};
var iconsPath = path.resolve(__dirname, '..', 'src', 'shared', 'assets', 'icons');
var svgPath = "".concat(iconsPath, "/svg");
var publicApi = "".concat(iconsPath, "/index.ts");
var filterRegex = /\.svg$/;
fs.readdir(svgPath, function (err, files) {
    if (!files) {
        console.error('Files not found');
    }
    var icons = files
        .filter(function (file) { return file.match(filterRegex); })
        .map(function (file) {
        var componentName = "Ico".concat(camelSentence(file.replace(/\.svg/, '')));
        return "export {default as ".concat(componentName, "} from './svg/").concat(file, "';");
    });
    fs.writeFileSync(publicApi, __spreadArray(__spreadArray([], icons, true), [''], false).join('\n'));
    console.log('DONE!');
});
//# sourceMappingURL=export-icons.js.map