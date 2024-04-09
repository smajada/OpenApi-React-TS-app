import { render, waitFor } from '@testing-library/react';
import LoginPage from '../components/pages/LoginPage';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from '../components/pages/HomePage';

window.matchMedia =
    window.matchMedia ||
    function () {
        return {
            matches: false,
            addListener: function () {},
            removeListener: function () {},
        };
    };

const localStorageMock = (() => {
    let store: Record<string, unknown> = {};

    return {
        getItem(key: string) {
            return store[key];
        },

        setItem(key: number, value: string) {
            store[key] = value;
        },

        clear() {
            store = {};
        },

        removeItem(key: number) {
            delete store[key];
        },

        getAll() {
            return store;
        },
    };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

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
});
