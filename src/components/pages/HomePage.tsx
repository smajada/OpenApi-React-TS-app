import React, { useState, useEffect } from 'react';
import { PostsApi, Post } from '../../generated-sources/openapi';
import { Table } from 'antd';

const postsApi = new PostsApi();

const HomePage: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    //Fetch posts
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

    //Table columns
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
        <Table dataSource={posts} data-testid='post-table' columns={columns} rowKey='id' bordered />
    );
};

export default HomePage;
