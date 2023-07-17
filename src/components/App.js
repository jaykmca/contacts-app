import '../App.css';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import React, {useState, useEffect } from 'react';
import Header from './Header'
import ContactList from './ContactList'
import AddContact from './AddContact'
import { v4 as uuid } from "uuid";
import ContactDetail from './ContactDetail';
import api from '../api/contact'
import EditContact from './EditContact';




function App() {
  // const Contacts = [
  //   {
  //     id:"1",
  //     name:"jay",
  //     email:"jayk@cybage.com"
  //   },
  //   {
  //     id:"1",
  //     name:"Nikhil",
  //     email:"NikhilSak@cybage.com"
  //   },

  // ]

  // const LOCAL_STORAGE_KEY = "contacts"
  // const [contacts, setContacts] = useState(async () => {
  //   const storedContacts = await retrieveContacts //localStorage.getItem(LOCAL_STORAGE_KEY);
  //   return storedContacts ? JSON.parse(storedContacts) : [];
  // });

   const [contacts, setContacts] = useState([])
 
  const retrieveContacts = async () =>{
      const response = await api.get('/contacts')
      return response.data
  } 
  
  const addContactHandler = async  (contact) =>{
    console.log(contact)
    const request = {
      id :uuid(),
      ...contact
    }
    const response = await api.post("/contacts",request)
    
    setContacts([...contacts, response.data])
  }

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`)
    const newContactList = contacts.filter((contact) =>{
      return contact.id !== id
    })
    setContacts(newContactList)
  }
  
  const updateContactHandler = async (contact) =>{
    console.log(contact.name)
    const response = await api.put(`/contacts/${contact.id}`, contact)
    const {id, name, email } = response.data
    console.log(name)
    console.log(email)
    const newContact =
      contacts.map((contact) => {
        return contact.id === id  ? {...response.data} : contact
      })
    

    console.log(newContact)
    setContacts(newContact)
    console.log(response.data)

  }


   useEffect(()=>{
    //  const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    //  if (retrieveContacts){
    //    setContacts(retrieveContacts)
    //  }

       const getAllContacts = async () => {
         const allContacts = await retrieveContacts()
         if (allContacts) {
          setContacts(allContacts)
         }
       }
       getAllContacts()
    
    },[])
  
  useEffect(()=>{
   //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  },[contacts])



  return (
    <div className='ui container'>
         <Router>
            <Header />
            <Routes>
            <Route    path="/"
                     element={<ContactList Contacts={contacts} getContactId={removeContactHandler} />}
            />
           <Route   path="/add"
                    element={<AddContact addContactHandler={addContactHandler} />}
           />
             <Route   path="/contact/:id"
                    element={<ContactDetail/>}
           />
            <Route   path="/edit/:id"
                    element={<EditContact updateContactHandler={updateContactHandler} />}
           />
            </Routes>
     </Router>
    </div>
  );
}

export default App;
