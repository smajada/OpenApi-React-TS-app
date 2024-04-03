import React, { useState, useEffect } from 'react';
import { PostsApi, Post } from '../../generated-sources/openapi';

const postsApi = new PostsApi();

const App: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postsData: Post[] = await postsApi.getPosts();
                console.log(postsData); // Mostrar todos los posts en la consola
                setPosts(postsData);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []); // Empty dependency array to run effect only once

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h1>{post.userId}</h1>
                        <h2>{post.title}</h2>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
