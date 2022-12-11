var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { fetchArticleById } from './fetchArticleById';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/article';
describe('fetchArticleById', function () {
    test('should be fulfilled/article', function () { return __awaiter(void 0, void 0, void 0, function () {
        var article, thunk, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    article = {
                        id: '1',
                        title: 'Javascript news',
                        subtitle: 'Что нового в JS за 2022 год?',
                        img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
                        views: 1022,
                        user: {
                            id: '1',
                            avatar: 'https://howlongtobeat.com/avatars/DeathGrips_1614523743.jpg',
                            username: 'Max',
                        },
                        createdAt: '26.02.2022',
                        type: [
                            ArticleType.IT,
                        ],
                        blocks: [
                            {
                                id: '1',
                                type: ArticleBlockType.TEXT,
                                title: 'Заголовок этого блока',
                                paragraphs: [
                                    'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                                    'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                                    'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
                                ],
                            },
                        ],
                    };
                    thunk = new TestAsyncThunk(fetchArticleById);
                    thunk.api.get.mockReturnValue(Promise.resolve({ data: article }));
                    return [4 /*yield*/, thunk.callThunk('1')];
                case 1:
                    result = _a.sent();
                    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
                    expect(thunk.api.get).toHaveBeenCalled();
                    expect(result.meta.requestStatus).toBe('fulfilled');
                    expect(result.payload).toEqual(article);
                    return [2 /*return*/];
            }
        });
    }); });
    test('should be rejected/error if get status 403', function () { return __awaiter(void 0, void 0, void 0, function () {
        var thunk, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    thunk = new TestAsyncThunk(fetchArticleById);
                    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
                    return [4 /*yield*/, thunk.callThunk('1')];
                case 1:
                    result = _a.sent();
                    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
                    expect(thunk.api.get).toHaveBeenCalled();
                    expect(result.meta.requestStatus).toBe('rejected');
                    expect(result.payload).toBe('error');
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=fetchArticleById.test.js.map