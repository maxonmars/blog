type Mods = Record<string, boolean>;

export const classNames = (classes: string[], mods: Mods = {}): string => [
	...classes,
	...Object.entries(mods)
		.filter(([_, value]) => value)
		.map(([className]) => className),
].join(' ').trim();
