import React from 'react';
import { useState, useEffect } from 'react';
import { api } from '../../Utils/Api/api';

const Dashboard = () => {

    const [response, setResponse] = useState([]);
    const [error, setError] = useState();

    const fetchData = async () => {
        await api.get('/render-urls')
            .then(response => { setResponse(response.data); })
            .catch(error => setError(error.response.data.error) );
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="App">
            <table border={1}>
                <tr>
                    <th>URL</th>
                    <th>STATUS</th>
                    <th>HTML RETORNADO</th>
                    <th>ALTERAR</th>
                    <th>DELETAR</th>
                </tr>
                {response.map((element, key)=>(
                    <tr key={key}>
                        <td>{element.url_website}</td>
                        <td>{element.status_code == 0 ? 'Em Analise' : element.status_code}</td>
                        <td>{element.requisition_body == '' ? 'Pendente' : element.requisition_body}</td>
                        <td><button>Alterar</button></td>
                        <td><button>X</button></td>
                    </tr>
                ))}
                {error ? error: ''}
            </table>
        </div>
    );
};

export default Dashboard;
