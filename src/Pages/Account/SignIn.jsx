import React from 'react';
import { useState } from 'react';
import { api } from '../../Utils/Api/api';
import qs from 'qs';

import Input from '../../Components/Input';
import { login } from '../../utils/Authorization/Authorization';


const SignIn = () => {

    const [user, setUser] = useState({});
    const [message, setMessage] = useState();

    /*
    * Deletando uma URL especifica.
    */
    const handleUser = async (e) => {

        e.preventDefault();

        console.log(user);

        await api.post('/login', qs.stringify(user, { encode: false }))
            .then(response=>{ login(response.data.token); location.href = '/dashboard'; })
            .catch(error=>{ setMessage(error.response.data.error); });
    };

    
    return (
        <>
            {message ? message : ''}
            <h1>Login</h1>
            <form onSubmit={handleUser}>
                <Input type="email" 
                    placeholder="Email"
                    onChange={e=>{ setUser({...user, email: e.target.value}); }} 
                />
                <Input type="password" 
                    placeholder="Senha" 
                    onChange={e=>{ setUser({...user, passwd: e.target.value}); }}
                />
                <Input type="submit" />
            </form>
        </>
    );
};

export default SignIn;
