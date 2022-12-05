import module from './CommentCard.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import type {Comment} from 'entities/Comment';
import {Avatar, AvatarSize} from 'shared/ui/Avatar/Avatar';
import {Title} from 'shared/ui/Title/Title';
import {Text} from 'shared/ui/Text/Text';
import {Skeleton} from 'shared/ui/Skeleton/Skeleton';

interface CommentCardProps {
	className?: string;
	comment: Comment;
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

	return (
		<div className={classNames([module.commentCard, className])}>
			<Avatar src={comment.user.avatar} size={AvatarSize.SM}/>
			<Title order={4}>{comment.user.username}</Title>
			<Text className={module.commentText}>{comment.text}</Text>
		</div>
	);
};
