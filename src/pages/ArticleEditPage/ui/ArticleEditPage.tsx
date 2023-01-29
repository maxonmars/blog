import {classNames} from '@/shared/lib/classNames/classNames';
import {Page} from '@/widgets/Page';
import {useTranslation} from 'react-i18next';
import {useParams} from 'react-router-dom';
import module from './ArticleEditPage.module.css';

interface ArticleEditPageProps {
	className?: string;
}

const ArticleEditPage = ({className}: ArticleEditPageProps) => {
	const {t} = useTranslation();
	const {id = ''} = useParams<{id: string}>();
	const isEdit = Boolean(id);

	return (
		<Page className={classNames([module.articleEditPage, className])}>
			{isEdit
				? `${t('Редактирование статьи с ID =')} ${id}`
				: t('Создание статьи')}
		</Page>
	);
};

export default ArticleEditPage;
