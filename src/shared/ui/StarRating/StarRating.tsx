import module from './StarRating.module.css';
import {classNames} from '@/shared/lib/classNames/classNames';
import {IcoStar} from '@/shared/assets/icons';
import {useMemo, useState} from 'react';

interface StarRatingProps {
	className?: string;
	totalStarsCount?: number;
	size?: number;
	selectedStars: number;
	onSelect: (starsCount: number) => void;
}

export const StarRating = (props: StarRatingProps) => {
	const {selectedStars, totalStarsCount = 5, onSelect, size = 30, className} = props;

	const stars = useMemo(() => {
		return new Array(totalStarsCount).fill(0).map((_, index) => ++index);
	}, [totalStarsCount]);

	const [hoveredStarCount, setHoveredStarCount] = useState(0);

	const isNotRateSelected = selectedStars === 0;
	const isRateSelected = selectedStars > 0;

	const handleStarHover = (starNumber: number) => () => {
		if (isNotRateSelected) {
			setHoveredStarCount(starNumber);
		}
	};

	const handleStarHoverLeave = () => {
		setHoveredStarCount(0);
	};

	const handleStarSelect = () => {
		if (isNotRateSelected) {
			onSelect(hoveredStarCount);
		}
	};

	return (
		<div className={classNames([module.starRating, className], {[module.rateSelected]: isRateSelected})}>
			{stars.map(starNumber => {
				return (
					<IcoStar
						width={size}
						onClick={handleStarSelect}
						onMouseLeave={handleStarHoverLeave}
						onMouseEnter={handleStarHover(starNumber)}
						key={starNumber}
						className={classNames([module.star],
							{
								[module.starHovered]: hoveredStarCount >= starNumber,
								[module.starSelected]: selectedStars >= starNumber,
							})}/>
				);
			})}
		</div>
	);
};
