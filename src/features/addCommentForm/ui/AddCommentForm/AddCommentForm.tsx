import module from './AddCommentForm.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import {Input} from 'shared/ui/Input/Input';
import {Button} from 'shared/ui/Button/Button';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {
	selectCommentFormError,
	selectCommentFormText,
} from '../../model/selectors/addCommentFormSelectors';
import {useCallback} from 'react';
import {addCommentFormActions, addCommentFormReducer} from '../../model/slice/addCommentFormSlice';
import {useAppDispatch} from 'shared/hooks';
import type {ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {DynamicModuleLoader} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {HStack} from 'shared/ui/Stack';

export interface AddCommentFormProps {
	className?: string;
	onCommentSend: (text: string) => void;
}

const reducers: ReducersList = {
	addCommentForm: addCommentFormReducer,
};

const AddCommentForm = ({className, onCommentSend}: AddCommentFormProps) => {
	const {t} = useTranslation();
	const text = useSelector(selectCommentFormText);
	const error = useSelector(selectCommentFormError);
	const dispatch = useAppDispatch();

	const handleCommentChange = useCallback((value: string) => {
		dispatch(addCommentFormActions.setText(value));
	}, [dispatch]);

	const handleCommentSend = () => {
		onCommentSend(text ?? '');
		dispatch(addCommentFormActions.setText(''));
	};

	return (
		<DynamicModuleLoader reducers={reducers} isRemoveAfterUnmount>
			<HStack gap="1" isMax justify="between" className={classNames([module.addCommentForm, className])}>
				<Input className={module.commentInput} onChange={handleCommentChange} value={text} placeholder={t('комментарий')}/>
				<Button onClick={handleCommentSend}>{t('Отправить')}</Button>
			</HStack>
		</DynamicModuleLoader>
	);
};

export default AddCommentForm;
