import {Component, Suspense} from 'react';
import type {ReactNode, ErrorInfo} from 'react';
import {PageError} from 'widgets/PageError';

interface ErrorBoundaryProps {
	children: ReactNode;
}

interface ErrorBoundaryState {
	hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	static getDerivedStateFromError(error: Error) {
		// Update state so the next render will show the fallback UI.
		return {hasError: true};
	}

	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = {hasError: false};
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		// You can also log the error to an error reporting service
		console.log(error, errorInfo);
	}

	render() {
		const {children} = this.props;
		const {hasError} = this.state;

		if (hasError) {
			// You can render any custom fallback UI
			return (
				<Suspense fallback="">
					<PageError/>
				</Suspense>
			);
		}

		return children;
	}
}
