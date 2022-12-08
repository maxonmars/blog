import ReactDOM from 'react-dom';
export var Portal = function (props) {
    var children = props.children;
    var container = document.body;
    return ReactDOM.createPortal(children, container);
};
//# sourceMappingURL=Portal.js.map