import type {Article} from '@/entities/Article';
import type {User} from '@/entities/User';
import {UserRoles} from '@/entities/User';
import jsPostImg from '@/shared/assets/tests/image/javaScript_logo.png';
import avatarImg from '@/shared/assets/tests/image/avatar-stories.jpeg';
import type {Comment} from '@/entities/Comment';
import {ArticleBlockType, ArticleType} from '@/entities/Article/model/consts/article';

export const user: User = {
	id: '1',
	username: 'Max',
	avatar: avatarImg as string,
	roles: [UserRoles.USER],
};

export const article: Article = {
	type: [ArticleType.IT],
	img: jsPostImg as string,
	title: 'JS News',
	id: '1',
	subtitle: 'subtitle',
	views: 123,
	createdAt: '28.09.2022',
	user,
	blocks: [
		{
			type: ArticleBlockType.TEXT,
			id: '1',
			title: 'title',
			paragraphs: ['paragraphs'],
		},
	],
};

export const articles: Article[] = [
	article,
	{...article, id: '2'},
	{...article, id: '3'},
];

export const comment: Comment = {
	id: '1',
	user,
	text: 'some comment text',
};

export const commentsNormalized = {
	ids: ['1', '2', '3'],
	entities: {
		1: comment,
		2: {...comment, id: '2'},
		3: {...comment, id: '3'},
	},
};

export const articleRatings = [
	{
		articleId: '1',
		userId: '1',
		rate: 3,
		id: 1,
	},
];
