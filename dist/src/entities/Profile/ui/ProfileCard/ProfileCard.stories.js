var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { ProfileCard } from './ProfileCard';
import { themeDecorator } from 'shared/lib/storybook/ThemeDecorator';
import { Theme } from 'shared/lib/theme';
import { storeDecorator } from 'shared/lib/storybook/StoreDecorator';
import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country/model/types/country';
import AvatarImg from 'shared/assets/tests/image/avatar-stories.jpeg';
export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function () { return _jsx(ProfileCard, {}); };
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
export var Light = Template.bind({});
Light.args = {};
Light.decorators = [storeDecorator({})];
Light.decorators = [storeDecorator({ profile: initialState })];
export var Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [themeDecorator(Theme.DARK), storeDecorator({ profile: initialState })];
export var Loading = Template.bind({});
Loading.decorators = [storeDecorator({ profile: __assign(__assign({}, initialState), { isLoading: true }) })];
export var Error = Template.bind({});
Error.decorators = [storeDecorator({ profile: __assign(__assign({}, initialState), { error: 'error' }) })];
//# sourceMappingURL=ProfileCard.stories.js.map