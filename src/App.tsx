import './App.css';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import { Layout, Menu, theme } from 'antd';
import { Routes, Route, useLocation, NavLink } from 'react-router-dom';
import { AuthRouteComponent } from './core';

function App() {
    const location = useLocation(); // Obtiene la ubicación actual
    const path = location.pathname;
    const { Header, Content, Footer } = Layout;

    //Theme tokens
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const items = [
        {
            key: 'Posts',
            label: 'Posts',
            path: '/',
        },
        {
            key: 'Login',
            label: 'Login',
            path: '/login',
        },
    ];

    return (
        <>
            <Layout>
                <Header style={{ display: 'flex', alignItems: 'center' }}>
                    <div className='demo-logo'>Posts</div>
                    <Menu
                        theme='dark'
                        mode='horizontal'
                        defaultSelectedKeys={path === '/login' ? ['Login'] : ['Posts']}
                        style={{ flex: 1, minWidth: 0 }}
                    >
                        {items.map((item) => (
                            <Menu.Item key={item.key}>
                                <NavLink to={item.path}>{item.label}</NavLink>
                            </Menu.Item>
                        ))}
                    </Menu>
                </Header>
                <Content style={{ padding: '0 48px' }}>
                    <div
                        style={{
                            background: colorBgContainer,
                            minHeight: 280,
                            padding: 24,
                            marginTop: 24,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        {/* Routes */}

                        <Routes>
                            <Route path='/login' element={<LoginPage />} />
                            <Route path='/' element={<HomePage />} />
                        </Routes>
                        {/* End-Routes */}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Application ©{new Date().getFullYear()} Created by Sergi Majada
                </Footer>
            </Layout>
        </>
    );
}

export default App;
