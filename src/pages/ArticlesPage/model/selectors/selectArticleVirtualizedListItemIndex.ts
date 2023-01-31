import type {StateScheme} from '@/app/providers/StoreProvider';

export const selectArticleVirtualizedListItemIndex = (state: StateScheme) => {
	return state.articleListPage?.virtualizedList.itemIndex;
};
