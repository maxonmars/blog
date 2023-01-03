import type {ComponentMeta, ComponentStory} from '@storybook/react';
import ProfilePage from './ProfilePage';
import {themeDecorator} from 'shared/lib/storybook/ThemeDecorator';
import {Theme} from 'shared/lib/theme';
import {storeDecorator} from 'shared/lib/storybook/StoreDecorator';
import type {EditableProfileCardSchema} from 'features/editableProfileCard/model/types/editableProfileCardSchema';
import AvatarImg from 'shared/assets/tests/image/avatar-stories.jpeg';
import type {Profile} from 'entities/Profile';
import {Country} from 'entities/Country/model/consts/country';
import {Currency} from 'entities/Currency/model/consts/currency';

type StoryType = ComponentStory<typeof ProfilePage>;

const profile: Profile = {
	firstName: 'Max',
	lastName: 'Mars',
	age: 22,
	username: 'Admin13',
	city: 'Irkutsk',
	avatar: AvatarImg as string,
	currency: Currency.RUB,
	country: Country.Russia,
};

const initialState: EditableProfileCardSchema = {
	editableProfileData: profile,
	readonlyProfileData: profile,
	isLoading: false,
	isReadonly: true,
};

export default {
	title: 'pages/ProfilePage',
	component: ProfilePage,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	decorators: [storeDecorator({profile: initialState})],
} as ComponentMeta<typeof ProfilePage>;

const Template: StoryType = () => <ProfilePage/>;

export const Light = Template.bind({});
Light.args = {
};

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [themeDecorator(Theme.DARK)];
