export enum UserRoles {
	USER = 'USER',
	ADMIN = 'ADMIN',
	MANAGER = 'MANAGER',
}

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
