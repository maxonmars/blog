import type {ReactNode} from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
	children: ReactNode;
}

export const Portal = (props: PortalProps) => {
	const {children} = props;
	const container = document.body;

	return ReactDOM.createPortal(children, container);
};
