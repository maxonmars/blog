export const getQueryParams = (params: OptionRecord<string, string>) => {
	const searchParams = new URLSearchParams(window.location.search);

	Object.entries(params).forEach(([name, value]) => {
		if (value !== undefined && value !== null) {
			searchParams.set(name, value);
		}
	});

	return `?${searchParams.toString()}`;
};

/**
 * Функция добавления параметров строки запроса в URL
 * @param params
 */
export const addQueryParams = (params: OptionRecord<string, string>) => {
	window.history.pushState(null, '', getQueryParams(params));
};
