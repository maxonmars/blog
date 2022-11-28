import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {ProfileCard} from './ProfileCard';
import {themeDecorator} from 'shared/lib/storybook/ThemeDecorator';
import {Theme} from 'shared/lib/theme';
import {storeDecorator} from 'shared/lib/storybook/StoreDecorator';
import type {ProfileScheme} from 'entities/Profile';
import {Currency} from 'entities/Currency/model/types/currency';
import {Country} from 'entities/Country/model/types/country';
import AvatarImg from 'shared/assets/tests/image/avatar-stories.jpeg';

type StoryType = ComponentStory<typeof ProfileCard>;

export default {
	title: 'entities/ProfileCard',
	component: ProfileCard,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
} as ComponentMeta<typeof ProfileCard>;

const Template: StoryType = () => <ProfileCard/>;

const initialState: ProfileScheme = {
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
