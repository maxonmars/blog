import {TestAsyncThunk} from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import {fetchNextArticlesPage} from './fetchNextArticlesPage';
import {fetchArticlesList} from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchNextArticlesPage', () => {
	test('should be fulfilled/profileData', async () => {
		const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
			articlesPage: {
				page: 2,
				ids: [],
				entities: {},
				limit: 5,
				hasMore: true,
				isLoading: false,
			},
		});
		await thunk.callThunk();

		expect(thunk.dispatch).toHaveBeenCalledTimes(4);
		expect(fetchArticlesList).toHaveBeenCalledWith({});
	});
	test('should be rejected/error if get status 403', async () => {
		const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
			articlesPage: {
				page: 2,
				ids: [],
				entities: {},
				limit: 5,
				hasMore: false,
				isLoading: false,
			},
		});
		await thunk.callThunk();

		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
		expect(fetchArticlesList).not.toHaveBeenCalled();
	});
});
