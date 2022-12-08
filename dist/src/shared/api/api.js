var _a;
import axios from 'axios';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';
export var $api = axios.create({
    baseURL: __API__,
    headers: {
        authorization: (_a = localStorage.getItem(USER_LOCAL_STORAGE_KEY)) !== null && _a !== void 0 ? _a : '',
    },
});
//# sourceMappingURL=api.js.map