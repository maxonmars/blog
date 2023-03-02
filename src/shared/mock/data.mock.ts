import type {Article} from '@/entities/Article/testing';
import {ArticleBlockType, ArticleType} from '@/entities/Article/testing';
import type {Comment} from '@/entities/Comment/testing';
import type {User} from '@/entities/User/testing';
import {UserRoles} from '@/entities/User/testing';
import avatarImg from '@/shared/assets/tests/image/avatar-stories.jpeg';
import jsPostImg from '@/shared/assets/tests/image/javaScript_logo.png';
import type {Notification} from '@/entities/notification/testing';

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

export const notificationList: Notification[] = [
	{
		userId: '1',
		title: 'Test notification 1',
		id: '1',
		description: 'Some testing description 1',
	},
	{
		userId: '1',
		title: 'Test notification 2',
		id: '2',
		description: 'Some testing description 2',
	},
	{
		userId: '1',
		title: 'Test notification 3',
		id: '3',
		description: 'Some testing description 3',
	},
];
