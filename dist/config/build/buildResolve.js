export function buildResolve(options) {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.path.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {},
    };
}
//# sourceMappingURL=buildResolve.js.map