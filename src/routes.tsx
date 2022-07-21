import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { isAuthenticated } from './utils/Authorization/Authorization';

import Home from './Pages/Home/Home';
// import Profile from './app/pages/profile';
// import SignUp from './app/pages/account/signup';
// import SignIn from './app/pages/account/signin';
// import Dashboard from './app/pages/settings/profile';
// import AccountSettings from './app/pages/settings/settings';
import NotFound from './Pages/NotFound/NotFound';

const PrivateRoute = (element) => {
    return  isAuthenticated() ? element : <Navigate to='/signin' />;
};

const ProtectedRoute = (element) => {
    return  !isAuthenticated() ? element : <Navigate to='/settings/profile' />;
};

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route 
                    path='/' 
                    element={ ProtectedRoute(<Home />) } />
   
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