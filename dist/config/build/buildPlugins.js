import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
export function buildPlugins(_a) {
    var path = _a.path, isDev = _a.isDev, isHotRefresh = _a.isHotRefresh, apiUrl = _a.apiUrl, project = _a.project;
    return [
        new HtmlWebpackPlugin({
            template: path.html,
        }),
        new webpack.ProgressPlugin(),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project),
        }),
        !isDev && new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        isDev && new BundleAnalyzerPlugin({
            openAnalyzer: false,
        }),
        isDev && isHotRefresh && new ReactRefreshPlugin(),
    ].filter(Boolean);
}
//# sourceMappingURL=buildPlugins.js.map