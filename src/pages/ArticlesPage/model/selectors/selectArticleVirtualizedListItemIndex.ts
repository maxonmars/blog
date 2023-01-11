import type {StateScheme} from '@/app/providers/StoreProvider/config/StateScheme';

export const selectArticleVirtualizedListItemIndex = (state: StateScheme) => {
	return state.articleListPage?.virtualizedList.itemIndex;
};
