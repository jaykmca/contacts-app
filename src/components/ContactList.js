import React from "react";
import ContactCard from "./ContactCard";
import { Link } from 'react-router-dom'

const ContactList = (props) =>{
    console.log(props)
    
    const deleteContactHandler = (id) => {
        props.getContactId(id)
    }
    const renderContactList = props.Contacts.map((contact)=>{
        return(
            <ContactCard contact={contact} clickHandler={deleteContactHandler} key ={contact.id}/>
                         );
    })
    return(
        <div >
       
          <div  className="ui celled list">
               {renderContactList}
          </div>
          <h2>
            <Link to={'/add'}>
            <button  className="ui button blue right">Add Contact</button>
            </Link>
         </h2>
         <div className="ui search">
             <div className="ui icon input">
                <input type="text" placeholder="search contact" className="prompt"></input>
               <i className="search icon"></i>
             </div>
         </div>
        </div>
    )
}

export default ContactList