import {createContext} from 'react';

const defaultUser = {
    email: '',
    password: '',
    isLoggedIn: false,
}

const defaultLogOut = () => {}
const UsrContext = createContext({
    user: defaultUser,
    logOut: defaultLogOut
});

export default UsrContext;
