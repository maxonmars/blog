import module from './ArticleViewSelector.module.css';
import {classNames} from '@/shared/lib/classNames/classNames';
import {ArticleView} from '@/entities/Article';
import {IcoThinGrid2, IcoThinListUl} from '@/shared/assets/icons';
import {Button, ButtonVariant} from '@/shared/ui/Button/Button';

interface ArticleViewSelectorProps {
	className?: string;
	onViewChange: (view: ArticleView) => void;
	view: ArticleView;
}

const viewTypes = [
	{
		view: ArticleView.GRID,
		Icon: IcoThinGrid2,
	},
	{
		view: ArticleView.LIST,
		Icon: IcoThinListUl,
	},
];

export const ArticleViewSelector = ({className, onViewChange, view}: ArticleViewSelectorProps) => {
	const handleClick = (view: ArticleView) => () => {
		onViewChange(view);
	};

	return (
		<div className={classNames([module.articleViewSelector, className])}>
			{viewTypes.map(viewType => {
				return (
					<Button
						onClick={handleClick(viewType.view)}
						variant={ButtonVariant.SUBTLE}
						key={viewType.view}>
						<viewType.Icon width={20} className={viewType.view === view ? module.selected : undefined}/>
					</Button>
				);
			})}
		</div>
	);
};
