import type {UserRoles} from '../consts/user';

export interface User {
	id: string;
	username: string;
	avatar?: string;
	roles?: UserRoles[];
}

export interface UserScheme {
	authData?: User;
	isInit: boolean;
}
