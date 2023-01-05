import type {PluginItem} from '@babel/core';

interface PluginState {
	opts: {
		forbiddenNodeNames: string[];
	};
}

export default function (): PluginItem {
	return {
		visitor: {
			Program(path, state: PluginState) {
				const forbiddenNodeNames = state.opts.forbiddenNodeNames ?? [];

				path.traverse({
					JSXIdentifier(current) {
						const nodeName = current.node.name;

						if (forbiddenNodeNames.includes(nodeName)) {
							current.parentPath.remove();
						}
					},
				});
			},
		},
	};
}
