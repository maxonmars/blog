import {App} from 'app/App';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from 'app/providers/theme';
import './shared/config/i18n/i18n';
import {ErrorBoundary} from 'app/providers/ErrorBoundary';
import {StoreProvider} from 'app/providers/StoreProvider';
import {createRoot} from 'react-dom/client';

const container = document.getElementById('root');

const root = createRoot(container!);

root.render(<BrowserRouter>
	<StoreProvider>
		<ErrorBoundary>
			<ThemeProvider>
				<App/>
				<App/>
			</ThemeProvider>
		</ErrorBoundary>
	</StoreProvider>
</BrowserRouter>);
