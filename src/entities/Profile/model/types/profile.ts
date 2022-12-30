import type {Currency} from 'entities/Currency/model/types/currency';
import type {Country} from 'entities/Country/model/types/country';

export interface Profile {
	id?: string;
	firstName?: string;
	lastName?: string;
	age?: number;
	currency?: Currency;
	country?: Country;
	city?: string;
	username?: string;
	avatar?: string;
}

export enum ProfileField {
	FIRST_NAME = 'firstName',
	LAST_NAME = 'lastName',
	AGE = 'age',
	CURRENCY = 'currency',
	COUNTRY = 'country',
	CITY = 'city',
	USERNAME = 'username',
	AVATAR = 'avatar',
}
