import {render, screen} from '@testing-library/react';
import {Button, ButtonVariant} from 'shared/ui/Button/Button';

describe('Button', () => {
	test('test render', () => {
		render(<Button>TEST</Button>);
		expect(screen.getByText('TEST')).toBeInTheDocument();
	});

	test('clear theme', () => {
		render(<Button variant={ButtonVariant.SUBTLE}>TEST</Button>);
		expect(screen.getByText('TEST')).toHaveClass('subtle');
		// screen.debug();
	});
});
