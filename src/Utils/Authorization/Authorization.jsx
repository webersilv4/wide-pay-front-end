import validator from 'validator';


export const TOKEN_KEY = '@token-user';

export const isAuthenticated = () => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token !== null)
        return validator.isJWT(token);
};
export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = (token) => {
    localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
};