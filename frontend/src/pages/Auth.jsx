import {useState, useEffect,useContext } from 'react';
import { useLocation, useNavigate} from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Auth = () => {
    const {user} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const defaultPage = location.state.from;
    const [page, setPage] = useState(localStorage.getItem('page') || defaultPage);
    

    useEffect(() => {
        localStorage.setItem('page', page);
    }, [page]);

    if(user){
        navigate("/")
    }

    const changetoLogin = () => {
        setPage('login');
        
    }
    const changetoSignup = () => {
        setPage('register');
    }
    const Switcher = () => {
        if(page === 'login'){
            return <Login/>
        }
        else {
            return <Register/>
        }
    }
    return (
        <div className="flex flex-col items-center"> 
        <Switcher/>
        <div >
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-5 rounded" onClick={changetoLogin}>Login</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-5 rounded" onClick={changetoSignup}>Register</button>
        </div>
        </div>
    )
    }


const Login = () => {

    const {login} = useContext(AuthContext);
    
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        login(email,password);

      }


    return (
        <div className="flex justify-center ">
        <form onSubmit={handleSubmit} className="flex flex-col items-center w-96 mt-96">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
            <input type="submit" value="Login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" />
        </form>
        </div>
    )
    }


    const Register = () => {

        const {register} = useContext(AuthContext);

        const handleSubmit = async (e)=>{
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;

            register(name,email,phone,password);
          }
        return (
            <div className="flex justify-center ">
            <form onSubmit={handleSubmit} className="flex flex-col items-center w-96 mt-96">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" required />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required />
                <input type="submit" value="Register" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" />
            </form>
            </div>
        )
        }
export default Auth;


