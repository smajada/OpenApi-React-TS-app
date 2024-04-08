// import './App.css';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import LayoutOrg from './components/organisms/LayoutOrg';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/utils/ProtectedRoute';
import { useLocalStorage } from 'react-use';

function App() {
    // Obteniendo los valores de usuario del localStorage
    const [user] = useLocalStorage('user', { username: '', password: '' });

    return (
        <LayoutOrg>
            {/* Routes */}
            <Routes>
                <Route
                    element={
                        <ProtectedRoute
                            canActivate={user?.username === 'admin' && user?.password === 'test'}
                        />
                    }
                >
                    <Route path='/' element={<HomePage />} />
                </Route>
                <Route path='/login' element={<LoginPage />} />
            </Routes>
            {/* End-Routes */}
        </LayoutOrg>
    );
}

export default App;
