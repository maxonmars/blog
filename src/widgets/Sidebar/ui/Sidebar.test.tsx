import {fireEvent, screen} from '@testing-library/react';
import {Sidebar} from 'widgets/Sidebar';
import {renderWithTranslations} from 'shared/lib/tests/renderWithTranslations/renderWithTranslations';

describe('Sidebar', () => {
	test('test render', () => {
		renderWithTranslations(<Sidebar/>);
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});

	test('sidebar collapse toggle', () => {
		renderWithTranslations(<Sidebar/>);
		const toggleButton = screen.getByTestId('sidebar-toggle');
		fireEvent.click(toggleButton);
		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
	});
});
