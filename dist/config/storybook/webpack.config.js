var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import path from 'path';
import { DefinePlugin } from 'webpack';
var buildPath = {
    entry: '',
    build: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
};
export default (function (_a) {
    var config = _a.config;
    // disable whatever is already set to load SVGs
    // add SVGR instead
    // resolve absolute path
    return __assign(__assign({}, config), { module: {
            rules: config.module.rules.map(function (rule) {
                if (RegExp(rule.test).test('.svg')) {
                    return __assign(__assign({}, rule), { exclude: /\.svg$/i });
                }
                return rule;
            }).concat({
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ['@svgr/webpack'],
            }),
        }, plugins: __spreadArray(__spreadArray([], config.plugins, true), [
            new DefinePlugin({
                __IS_DEV__: JSON.stringify(true),
                __API__: JSON.stringify(''),
                __PROJECT__: JSON.stringify('storybook'),
            }),
        ], false), resolve: __assign(__assign({}, config.resolve), { modules: __spreadArray([buildPath.src], config.resolve.modules, true), extensions: __spreadArray(__spreadArray([], config.resolve.extensions, true), ['.tsx', '.ts'], false) }) });
});
//# sourceMappingURL=webpack.config.js.map