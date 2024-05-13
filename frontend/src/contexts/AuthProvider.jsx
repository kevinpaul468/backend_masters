import {useState, createContext, useEffect} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
export const AuthContext = createContext();

const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(false);

    useEffect(()=>{
        (async function (){
            const response = await axios.get('/api/auth');
            const data = response.data;
            setUser(data.session.user);
            })()

    },[])

    const login = async (email, password) => {
        const response = await axios.post('/api/login', { email, password });
        const data = response.data;
        if (data.error) {
            toast(data.error);
        } else {
            toast("welcome " + data.session.user.name);
            setUser(data); 
        }
    }

    const logout = async () => {
        const response = await axios.post('/api/logout');
        const data = response.data;
        toast(data.message);
        setUser(false);
    }

    return(
        <AuthContext.Provider value={{user, setUser,  login ,logout}}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider;
