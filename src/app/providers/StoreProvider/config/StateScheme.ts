import type {UserScheme} from 'entities/User';
import type {LoginScheme} from 'features/AuthByUsername';

export interface StateScheme {
	user: UserScheme;
	login?: LoginScheme;
}
