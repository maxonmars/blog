import path from 'path';
import {buildWebpackConfig} from './config/build/buildWebpackConfig';
import type {BuildEnv, BuildPath} from './config/build/types';

const buildPath: BuildPath = {
	entry: path.resolve(__dirname, 'src', 'index.tsx'),
	build: path.resolve(__dirname, 'build'),
	html: path.resolve(__dirname, 'public', 'index.html'),
	src: path.resolve(__dirname, 'src'),
};

export default (env: BuildEnv) => {
	const PORT = env.port || 3000;

	const mode = env.mode || 'development';
	const isDev = mode === 'development';

	const refresh = env.refresh || 'cold';
	const isHotRefresh = refresh === 'hot';

	const apiUrl = env.apiUrl || 'http://localhost:8000';

	const project = 'frontend';

	return buildWebpackConfig({
		mode,
		path: buildPath,
		isDev,
		isHotRefresh,
		port: PORT,
		apiUrl,
		project,
	});
};
