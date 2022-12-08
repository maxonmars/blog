import { jsx as _jsx } from "react/jsx-runtime";
import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
describe('Sidebar', function () {
    test('test render', function () {
        componentRender(_jsx(Sidebar, {}));
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('sidebar collapse toggle', function () {
        componentRender(_jsx(Sidebar, {}));
        var toggleButton = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
//# sourceMappingURL=Sidebar.test.js.map