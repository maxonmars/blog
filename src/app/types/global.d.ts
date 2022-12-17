declare module '*.css' {
	type IClassNames = Record<string, string>;
	const classNames: IClassNames;
	export = classNames;
}

declare module '*.svg' {
	import type React from 'react';
	const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
	export default SVG;
}

declare module '*.png';
declare module '*.gif';
declare module '*.jpeg';

// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __IS_DEV__: boolean;
declare const __API__: string;
declare const __PROJECT__: 'frontend' | 'jest' | 'storybook';

// eslint-disable-next-line @typescript-eslint/ban-types
type DeepPartial<T> = T extends object ? {
	[P in keyof T]?: DeepPartial<T[P]>;
} : T;
// type DeepPartial<T> = T extends Record<string, unknown> ? {
// 	[P in keyof T]?: DeepPartial<T[P]>;
// } : T;

type OptionRecord<K extends keyof any, T> = {
	[P in K]?: T;
};
