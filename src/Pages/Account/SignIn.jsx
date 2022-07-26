import React from 'react';
import { useState } from 'react';
import { api } from '../../Utils/Api/api';
import qs from 'qs';

import Input from '../../Components/Input';
import { login } from '../../Utils/Authorization/Authorization';
import Alert from '../../Components/Alert';

const SignIn = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState();

    /*
    * Deletando uma URL especifica.
    */
    const handleUser = async (e) => {

        e.preventDefault();

        await api.post('/signin', qs.stringify(user, { encode: false }))
            .then(response=>{ login(response.data.token); location.href = '/dashboard'; })
            .catch(error=>{ setError(error.response.data.error); });
    };

    
    return (
        <>
            {error ? <Alert message={error} typeAlert="alert-danger" /> : ''}  

            <form onSubmit={handleUser} className="container">
                <h1 className='col-md-12 mb-5 '>Faça seu login</h1>
                
                <div className='form-row '>
                    <div className="col">
                        <Input type="email" 
                            placeholder="Email"
                            onChange={e=>{ setUser({...user, email: e.target.value}); }} 
                            className="form-control"
                        />
                    </div>

                    <div className="col">
                        <Input type="password" 
                            placeholder="Senha" 
                            onChange={e=>{ setUser({...user, passwd: e.target.value}); }}
                            className="form-control"
                        />
                    </div>
                </div>

                <Input type="submit" className="col mt-3 btn btn-success btn-lg" value="Entrar"/>
                
                <span>
                    Ainda não tem uma conta ? <a href="/signup">Cadastre-se</a>
                </span>
            </form>
        </>
    );
};

export default SignIn;
