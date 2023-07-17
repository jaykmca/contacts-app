import React from "react";
import user from '../images/user.PNG'
import { Link } from 'react-router-dom'


const ContactCard = (props) =>{

    const {id, name, email} = props.contact
    
    return(

        
        <div className="item">
             <img className="ui avatar image" src={user} alt="user"></img>
           <div className="content">
             <Link to={`/contact/${id}?name=${name}&email=${email}`}>
                 <div className="header">{name}</div>
                 <div>{email}</div>
            </Link>
          </div>
        <i className="trash outline alternate icon" style={{ color:"red", marginTop:"7px", marginLeft: "10px"}} onClick={()=> props.clickHandler(id)}></i>
        <Link to={`/edit/${id}?name=${name}&email=${email}`}>
        <i className="edit outline alternate icon" style={{ color:"blue", marginTop:"7px"}} ></i>
        </Link>
    </div>
    )
}

export default ContactCard