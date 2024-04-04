import React, { useState, useEffect } from 'react';
import { PostsApi, Post } from '../../generated-sources/openapi';
import { Table, Layout, Menu, theme } from 'antd';

const postsApi = new PostsApi();
const { Header, Content, Footer } = Layout;

const items = new Array(3).fill(null).map((_, index) => ({
    key: index + 1,
    label: `nav ${index + 1}`,
}));

const App: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postsData: Post[] = await postsApi.getPosts();
                setPosts(postsData);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'User ID',
            dataIndex: 'userId',
            key: 'userId',
            filters: [
                { text: '1', value: 1 },
                { text: '2', value: 2 },
                { text: '3', value: 3 },
                { text: '4', value: 4 },
                { text: '5', value: 5 },
                { text: '6', value: 6 },
                { text: '7', value: 7 },
                { text: '8', value: 8 },
                { text: '9', value: 9 },
                { text: '10', value: 10 },
            ],
            onFilter: (value: number, record: Post) => record.userId === value,
            filterSearch: true,
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
    ];

    return (
        <Layout>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <div className='demo-logo' />
                <Menu
                    theme='dark'
                    mode='horizontal'
                    defaultSelectedKeys={['2']}
                    items={items}
                    style={{ flex: 1, minWidth: 0 }}
                />
            </Header>
            <Content style={{ padding: '0 48px' }}>
                <div
                    style={{
                        background: colorBgContainer,
                        minHeight: 280,
                        padding: 24,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Table dataSource={posts} columns={columns} rowKey='id' />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </Layout>
    );
};

export default App;
