import {getRouteProfile} from '@/shared/const/router';
import {classNames} from '@/shared/lib/classNames/classNames';
import {AppLink} from '@/shared/ui/AppLink';
import {Avatar, AvatarSize} from '@/shared/ui/Avatar';
import {Skeleton} from '@/shared/ui/Skeleton';
import {HStack, VStack} from '@/shared/ui/Stack';
import {Text} from '@/shared/ui/Text';
import {Title} from '@/shared/ui/Title';
import type {Comment} from '../../model/types/comment';
import module from './CommentCard.module.css';

interface CommentCardProps {
	className?: string;
	comment?: Comment;
	isLoading?: boolean;
}

export const CommentCard = ({className, comment, isLoading}: CommentCardProps) => {
	if (isLoading) {
		return (
			<VStack data-testid="CommentCard.Loading" gap="1" isMax className={classNames([module.commentCard, className])}>
				<HStack gap="1">
					<Skeleton borderRadius={'50%'} width={50} height={50}/>
					<Skeleton width={150} height={20}/>
				</HStack>
				<Skeleton className={module.commentText} width={'100%'} height={16}/>
			</VStack>
		);
	}

	if (!comment) {
		return null;
	}

	const profileLink = getRouteProfile(comment.user.id);

	return (
		<VStack data-testid="CommentCard.Content" gap="1" isMax className={classNames([module.commentCard, className])}>
			<HStack gap="1">
				<AppLink to={profileLink}>
					<Avatar
						alt="аватар пользователя"
						loading="lazy"
						decoding="async"
						src={comment.user.avatar}
						size={AvatarSize.SM}/>
				</AppLink>
				<AppLink to={profileLink}>
					<Title order={4}>{comment.user.username}</Title>
				</AppLink>
			</HStack>
			<Text className={module.commentText}>{comment.text}</Text>
		</VStack>
	);
};
