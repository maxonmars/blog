export type ClassNamesMods = Record<string, boolean | undefined>;

export const classNames = (classes: Array<string | undefined> = [], mods: ClassNamesMods = {}): string => [
	...classes,
	...Object.entries(mods)
		.filter(([_, value]) => value)
		.map(([className]) => className),
].join(' ').trim();
