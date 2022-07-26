import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { isAuthenticated } from './utils/Authorization/Authorization';

import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Dashboard from './Pages/Dashboard/Dashboard';
import SignIn from './Pages/Account/SignIn';
import SignUp from './Pages/Account/SignUp';

const PrivateRoute = (element) => {
    return  isAuthenticated() ? element : <Navigate to='/signin' />;
};

const ProtectedRoute = (element) => {
    return  !isAuthenticated() ? element : <Navigate to='/dashboard' />;
};

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route 
                    path='/' 
                    element={ ProtectedRoute(<Home />) } />

                <Route 
                    path='/dashboard' 
                    element={ PrivateRoute(<Dashboard />) } />

                <Route 
                    path='/signin' 
                    element={ ProtectedRoute(<SignIn />) } />

                <Route 
                    path='/signup' 
                    element={ ProtectedRoute(<SignUp />) } />
   
                <Route 
                    path='/*' 
                    element={<NotFound />} />
                
                {/* Private Routes 
                <Route 
                    // path='/settings/profile' 
                    // element={ PrivateRoute(<Dashboard />) } />*/}

            </Routes>
        </BrowserRouter>
    );
};

export default Router;