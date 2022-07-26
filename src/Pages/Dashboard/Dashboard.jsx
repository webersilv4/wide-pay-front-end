import React from 'react';
import { useState, useEffect } from 'react';
import { api } from '../../Utils/Api/api';
import qs from 'qs';

import Input from '../../Components/Input';
import Modal from '../../Components/Modal';
import Alert from '../../Components/Alert';

import { MdModeEdit, MdOutlineRemoveRedEye } from 'react-icons/md';

const Dashboard = () => {

    const [response, setResponse] = useState([]);
    const [success, setsuccess] = useState();
    const [error, setError] = useState();
    const [newUrl, setNewUrl] = useState();

    /*
    * Recebendo todos os dados do usuario autenticado
    */
    const fetchData = async () => {
        await api.get('/render-urls')
            .then(response => { setResponse(response.data); })
            .catch(error => setError(error.response.data.error) );
    };

    /*
    * Deletando uma URL especifica.
    */
    const handleDelete = async (e) => {
        const { value } = e.target;

        await api.delete('/delete-url', { data: qs.stringify({ id: value })})
            .then(response=>{
                setsuccess(response.data.success);
                fetchData();

            }).catch(error=>{ setError(error.response.data.error); });
    };

    /*
    * Criando uma nova URL
    */
    const handleNewUrl = async (e) => {
        
        e.preventDefault();
        await api.post('/new-url', qs.stringify(newUrl, { encode: false }))
            .then(response=>{
                setsuccess(response.data.success);
                console.log(response);
                fetchData();
            }).catch(error=>{ setError(error.response.data.error); });
    };

    /*
    * Fazendo Update das URLs
    */
    const handleUpdate = async (e) => {
        
        e.preventDefault();
        
        await api.put('/alter-url', qs.stringify(newUrl, { encode: true }))
            .then(response=>{
                setsuccess(response.data.success);
                console.log(response);
                fetchData();
            }).catch(error=>{ setError(error.response.data.error); });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="col-md-7 mx-auto mt-5">

            {success ? <Alert message={success} typeAlert="alert-success" /> : '' }
            
            {error ? <Alert message={error} typeAlert="alert-danger" /> : '' }


            <div className='d-flex justify-content-between m-2'>
                <button 
                    type="button" 
                    className="btn btn-success" 
                    data-toggle="modal" 
                    data-target="#add">
                    Adicionar
                </button>
                <button 
                    type="button" 
                    className='btn btn-warning' 
                    onClick={fetchData}>
                    Atualizar
                </button>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>URL</th>
                        <th>STATUS</th>
                        <th>HTML RETORNADO</th>
                        <th>ALTERAR</th>
                        <th>DELETAR</th>
                    </tr>
                </thead>
                <tbody>

                    {response.map((element, key)=>(
                        <tr key={key}>
                            <td>
                                {element.url_website}
                            </td>
                            <td>
                                <b>{ element.status_code == 404 ? 
                                    <span className="text-danger">Url inválida</span> : 
                                    <span className='text-success'>Sucesso</span> 
                                }</b>
                            </td>
                            <td>
                                <button 
                                    type="button" 
                                    className="btn btn-primary" 
                                    data-toggle="modal" 
                                    data-target={`#viewHTML${key}`}>
                                    Ver HTML <MdOutlineRemoveRedEye className='ml-1' />
                                </button>
                            </td>
                            <td>
                                <button 
                                    type="button" 
                                    className="btn btn-primary d-flex" 
                                    data-toggle="modal" 
                                    data-target={`#update${key}`}>
                                    Alterar <MdModeEdit className='mt-1 ml-1' />
                                </button>
                            </td>
                            <td>
                                <button onClick={handleDelete} 
                                    value={element.id} 
                                    className='btn btn-danger'>X</button>
                            </td>
                        </tr>
                    ))}
                
                </tbody>
            </table>

            {response.map((element, key)=>(
                <div key={key}>
                    
                    {/* Modal Responsável pelo  VIEW HTML */}
                    <Modal id={`viewHTML${key}`} title={element.url_website} element={element.requisition_body} />
                    

                    {/* Modal Responsável pelo UPDATE URL */}
                    <Modal id={`update${key}`} title="Atualizar URL" element={
                        <>
                            <form onSubmit={handleUpdate}>
                                <b>As URLS devem conter (http:// ou https://antes do endereço.)</b>
                                <Input type="text" 
                                    placeholder="Digite a URL Ex: (https://exemple.com)" 
                                    onChange={e => setNewUrl({id:element.id, url:e.target.value})} /> 
                                <Input type="submit" />
                            </form>
                        </>
                    } />
                    

                </div>
            ))}


            {/* Formulario que Adiciona Um nova URL */}
            <Modal id="add" title="ADD nova URL" element={
                <>
                    <form onSubmit={handleNewUrl}>
                        <b>As URLS devem conter (http:// ou https://antes do endereço.)</b>
                        <Input type="text" 
                            placeholder="Digite a URL Ex: (https://exemple.com)" 
                            onChange={e => setNewUrl({ url: e.target.value })} />
                        <Input type="submit" />
                    </form>
                </>
            } />
            

        </div>
    );
};

export default Dashboard;
