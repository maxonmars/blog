import {classNames} from '@/shared/lib/classNames/classNames';
import type {ReducersList} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {DynamicModuleLoader} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {Button} from '@/shared/ui/Button';
import {Input} from '@/shared/ui/Input';
import {HStack} from '@/shared/ui/Stack';
import {useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {useCommentFormError, useCommentFormText} from '../../model/selectors/addCommentFormSelectors';
import {addCommentFormReducer, useCommentAction} from '../../model/slice/addCommentFormSlice';
import module from './AddCommentForm.module.css';

export interface AddCommentFormProps {
	className?: string;
	onCommentSend: (text: string) => void;
}

const reducers: ReducersList = {
	addCommentForm: addCommentFormReducer,
};

const AddCommentForm = ({className, onCommentSend}: AddCommentFormProps) => {
	const {t} = useTranslation();
	const text = useCommentFormText();
	const error = useCommentFormError();
	const {setText} = useCommentAction();

	const handleCommentChange = useCallback((value: string) => {
		setText(value);
	}, [setText]);

	const handleCommentSend = () => {
		onCommentSend(text ?? '');
		setText('');
	};

	return (
		<DynamicModuleLoader reducers={reducers} isRemoveAfterUnmount>
			<HStack data-testid="AddCommentForm" gap="1" isMax justify="between" className={classNames([module.addCommentForm, className])}>
				<Input data-testid="AddCommentForm.Input" className={module.commentInput} onChange={handleCommentChange} value={text} placeholder={t('комментарий')}/>
				<Button data-testid="AddCommentForm.Button" onClick={handleCommentSend}>{t('Отправить')}</Button>
			</HStack>
		</DynamicModuleLoader>
	);
};

export default AddCommentForm;
