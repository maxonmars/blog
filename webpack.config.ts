import path from "path";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildPath} from "./config/build/types";

const buildPath: BuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
};

export default (env: BuildEnv) => {
    const mode = env.mode || 'development';
    const PORT = env.port || 3000;
    const isDev = mode === 'development';

    return buildWebpackConfig({
        mode,
        path: buildPath,
        isDev,
        port: PORT,
    })
};
