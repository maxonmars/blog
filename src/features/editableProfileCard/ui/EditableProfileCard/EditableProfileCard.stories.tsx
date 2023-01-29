import {Country} from '@/entities/Country';
import {Currency} from '@/entities/Currency';
import AvatarImg from '@/shared/assets/tests/image/avatar-stories.jpeg';
import {storeDecorator} from '@/shared/lib/storybook/StoreDecorator';
import {themeDecorator} from '@/shared/lib/storybook/ThemeDecorator';
import {Theme} from '@/shared/lib/theme';
import type {ComponentMeta, ComponentStory} from '@storybook/react';
import type {EditableProfileCardSchema} from '../../model/types/editableProfileCardSchema';
import {EditableProfileCard} from './EditableProfileCard';

type StoryType = ComponentStory<typeof EditableProfileCard>;

export default {
	title: 'features/EditableProfileCard',
	component: EditableProfileCard,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {
		idProfile: '1',
	},
} as ComponentMeta<typeof EditableProfileCard>;

const Template: StoryType = args => <EditableProfileCard {...args}/>;

const initialState: EditableProfileCardSchema = {
	editableProfileData: {
		firstName: 'Max',
		lastName: 'Mars',
		age: 22,
		username: 'Admin13',
		city: 'Irkutsk',
		avatar: AvatarImg as string,
		currency: Currency.RUB,
		country: Country.Russia,
	},
	isLoading: false,
	isReadonly: true,
};

export const Light = Template.bind({});
Light.args = {
};
Light.decorators = [storeDecorator({})];
Light.decorators = [storeDecorator({profile: initialState})];

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [themeDecorator(Theme.DARK), storeDecorator({profile: initialState})];

export const Loading = Template.bind({});
Loading.decorators = [storeDecorator({profile: {...initialState, isLoading: true}})];

export const Error = Template.bind({});
Error.decorators = [storeDecorator({profile: {...initialState, error: 'error'}})];
