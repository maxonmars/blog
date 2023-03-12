import {USER_LOCAL_STORAGE_KEY} from '@/shared/const/localStorage';

export const login = (username = 'testUser', password = '123') => {
	return cy
		.request({
			method: 'POST',
			url: 'http://localhost:8000/login',
			body: {
				username,
				password,
			},
		})
		.then(({body}) => {
			window.localStorage.setItem(
				USER_LOCAL_STORAGE_KEY,
				JSON.stringify(body),
			);
			// eslint-disable-next-line @typescript-eslint/no-unsafe-return
			return body;
		});
};
