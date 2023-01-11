import type {Country} from '@/entities/Country/model/consts/country';
import type {Currency} from '@/entities/Currency/model/consts/currency';

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
