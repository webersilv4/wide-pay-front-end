/* eslint-disable react/prop-types */
import React from 'react';
import { isAuthenticated, logout } from '../utils/Authorization/Authorization';


const Navbar = () => {
    return (
        <ul className="nav justify-content-end pr-5 mb-5 border-bottom pb-3 mt-3">
            
            <li className="nav-item">
                {isAuthenticated() ? 
                    <a className="nav-link btn btn-danger" onClick={logout} href="/">Sair</a> 
                    : <a className="nav-link btn btn-warning" href='/signin'>Entrar</a> 
                }
            </li>
        </ul>
    );
};

export default Navbar;
