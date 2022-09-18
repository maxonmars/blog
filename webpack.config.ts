import path from "path";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildPath} from "./config/build/types";

const buildPath: BuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
};

const mode = 'development';
const isDev = mode === 'development';
const PORT = 3000;

const config = buildWebpackConfig({
    mode,
    path: buildPath,
    isDev,
    port: PORT,
});

export default config;