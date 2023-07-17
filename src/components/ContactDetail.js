import React from "react";
import user from '../images/user.PNG'
import { useLocation } from 'react-router-dom';



const ContactDetail = (props) =>{
    console.log(props)
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const name = searchParams.get('name');
    const email = searchParams.get('email');
    
    return (
        <div className="main">
             <div className="us card centred">
                <div className="image">
                <img className="ui avatar image" src={user} alt="user"></img>
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>
             </div>
        
        </div>
    )
}

export default ContactDetail