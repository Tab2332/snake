import React, { useEffect, useState } from 'react';
import { customUrl } from './config';

const Home = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch(customUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data.message);
                setMessage(data.message);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Welcome to the Love Matching App</h1>
            <p>{message}</p>
        </div>
    );
};

export default Home;
