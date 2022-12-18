import module from './ArticleEditPage.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import {Page} from 'widgets/Page/Page';
import {useParams} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

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
