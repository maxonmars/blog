import {selectUserAuthData} from '@/entities/User';
import {selectArticleDetailsData} from '@/entities/Article/model/selectors/selectArticleDetails';
import {createSelector} from '@reduxjs/toolkit';

export const selectArticleDetailsIsEdit = createSelector(
	selectUserAuthData,
	selectArticleDetailsData,
	(user, article) => {
		if (!user || !article) {
			return false;
		}

		return user.id === article.user.id;
	},
);
