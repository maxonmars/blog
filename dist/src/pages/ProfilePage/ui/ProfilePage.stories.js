import { jsx as _jsx } from "react/jsx-runtime";
import ProfilePage from './ProfilePage';
import { themeDecorator } from 'shared/lib/storybook/ThemeDecorator';
import { Theme } from 'shared/lib/theme';
import { storeDecorator } from 'shared/lib/storybook/StoreDecorator';
import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country/model/types/country';
import AvatarImg from 'shared/assets/tests/image/avatar-stories.jpeg';
var initialState = {
    editableProfileData: {
        firstName: 'Max',
        lastName: 'Mars',
        age: 22,
        username: 'Admin13',
        city: 'Irkutsk',
        avatar: AvatarImg,
        currency: Currency.RUB,
        country: Country.Russia,
    },
    isLoading: false,
    isReadonly: true,
};
export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function () { return _jsx(ProfilePage, {}); };
export var Light = Template.bind({});
Light.args = {};
Light.decorators = [storeDecorator({ profile: initialState })];
export var Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [themeDecorator(Theme.DARK), storeDecorator({ profile: initialState })];
//# sourceMappingURL=ProfilePage.stories.js.map