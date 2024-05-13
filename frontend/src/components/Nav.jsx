import React from 'react';
import { useNavigate} from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import {useContext} from 'react';


const Nav = () => {
    
    const {user, logout} = useContext(AuthContext);
    const navigate = useNavigate();
    
    const goToAuth = (from) => {
        navigate('/auth',{state:{from}})
    }
    
    return (
        
        <div className='nav'>
            <div className='flex ml-10'>
                <a href='/'><div className='navelement'>Home</div></a>
                <a href='/cources'><div className='navelement'>cources</div></a>
                <a href='/workshops'><div className='navelement'>workshops</div></a>
                <a href='/community'><div className='navelement'>community</div></a>
            </div>
            {
                user ?
                <div className='flex mr-10'>
                <a href='/profile'><div className='navelement'>profile</div></a>
                <a onClick={(e)=>{e.preventDefault(); logout()}}><div className='navelement'>logout</div></a>
            </div>   
            :
            <div className='flex mr-10'>
                <a onClick={(e)=>{e.preventDefault(); goToAuth("register")}}><div className='navelement '>register</div></a>
                <a onClick={(e)=>{e.preventDefault(); goToAuth("login")} }><div className='navelement '>Login</div></a>
            </div>   
            }         
        </div>
    )
}

export default Nav;