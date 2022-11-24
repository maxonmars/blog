type BuildMode = 'development' | 'production';

type RefreshMode = 'hot' | 'cold';

export interface BuildPath {
	entry: string;
	build: string;
	html: string;
	src: string;
}

export interface BuildOptions {
	mode: BuildMode;
	path: BuildPath;
	isDev: boolean;
	isHotRefresh: boolean;
	port: number;
	apiUrl: string;
}

export interface BuildEnv {
	mode: BuildMode;
	port: number;
	refresh: RefreshMode;
	apiUrl: string;
}
