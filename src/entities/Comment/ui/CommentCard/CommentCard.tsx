import module from './CommentCard.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import type {Comment} from 'entities/Comment';
import {Avatar, AvatarSize} from 'shared/ui/Avatar/Avatar';
import {Title} from 'shared/ui/Title/Title';
import {Text} from 'shared/ui/Text/Text';
import {Skeleton} from 'shared/ui/Skeleton/Skeleton';
import {AppLink} from 'shared/ui/AppLink/AppLink';
import {ROUTE_PATH} from 'app/providers/router';

interface CommentCardProps {
	className?: string;
	comment?: Comment;
	isLoading?: boolean;
}

export const CommentCard = ({className, comment, isLoading}: CommentCardProps) => {
	if (isLoading) {
		return (
			<div className={classNames([module.commentCard, className])}>
				<Skeleton borderRadius={'50%'} width={50} height={50}/>
				<Skeleton width={150} height={20}/>
				<Skeleton className={module.commentText} width={'100%'} height={16}/>
			</div>
		);
	}

	if (!comment) {
		return null;
	}

	const profileLink = `${ROUTE_PATH.PROFILE}${comment.user.id}`;

	return (
		<div className={classNames([module.commentCard, className])}>
			<AppLink to={profileLink}>
				<Avatar src={comment.user.avatar} size={AvatarSize.SM}/>
			</AppLink>
			<AppLink to={profileLink}>
				<Title order={4}>{comment.user.username}</Title>
			</AppLink>
			<Text className={module.commentText}>{comment.text}</Text>
		</div>
	);
};
