import React from 'react';
import { useQueryClient } from 'react-query';

function Main() {
    const queryClient = useQueryClient();
    const data = queryClient.getQueryData('repoData');

    return (
        <div>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <strong>👀 {data.subscribers_count}</strong>{' '}
            <strong>✨ {data.stargazers_count}</strong>{' '}
            <strong>🍴 {data.forks_count}</strong>
        </div>
    )
}

export default Main;
