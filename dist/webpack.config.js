import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
var buildPath = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
};
export default (function (env) {
    var PORT = env.port || 3000;
    var mode = env.mode || 'development';
    var isDev = mode === 'development';
    var refresh = env.refresh || 'cold';
    var isHotRefresh = refresh === 'hot';
    var apiUrl = env.apiUrl || 'http://localhost:8000';
    var project = 'frontend';
    return buildWebpackConfig({
        mode: mode,
        path: buildPath,
        isDev: isDev,
        isHotRefresh: isHotRefresh,
        port: PORT,
        apiUrl: apiUrl,
        project: project,
    });
});
//# sourceMappingURL=webpack.config.js.map