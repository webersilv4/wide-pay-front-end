import React from 'react';
import { useState, useEffect } from 'react';
import { api } from '../../Utils/Api/api';

const Dashboard = () => {

    const [response, setResponse] = useState();
    const [error, setError] = useState();

    const fetchData = async () => {
        await api.get('/render-urls')
            .then(response => { console.log(response); setResponse([response.data]); })
            .catch(error => setError(error.response.data.error) );
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="App">
            <h1>Ola</h1>
            {error ? error: ''}
        </div>
    );
};

export default Dashboard;
