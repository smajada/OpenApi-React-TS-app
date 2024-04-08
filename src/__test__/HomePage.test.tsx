import { render, fireEvent } from '@testing-library/react'; // Import act
import userEvent from '@testing-library/user-event'; // Import userEvent
import LoginPage from '../components/pages/LoginPage';
import { BrowserRouter as Router } from 'react-router-dom';

window.matchMedia =
    window.matchMedia ||
    function () {
        return {
            matches: false,
            addListener: function () {},
            removeListener: function () {},
        };
    };

describe('LoginPage', () => {
    test('renders login form correctly', () => {
        const { getByLabelText, getByText } = render(
            <Router>
                <LoginPage />
            </Router>
        );

        expect(getByLabelText(/Username/i)).toBeTruthy();
        expect(getByLabelText(/Password/i)).toBeTruthy();
        expect(getByText('Submit')).toBeTruthy();
    });

    test('submits form with correct values', () => {
        const { getByLabelText, getByText } = render(
            <Router>
                <LoginPage />
            </Router>
        );

        userEvent.type(getByLabelText('Username'), 'admin');
        userEvent.type(getByLabelText('Password'), 'test');
        fireEvent.click(getByText('Submit'));

        // expect(window.localStorage.getItem('user')).toEqual(
        //     '{"username":"admin","password":"test"}'
        // );

        expect(window.location.pathname).toBe('/');
    });
});