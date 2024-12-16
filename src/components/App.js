import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(() => {
    const retrieveContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
    return retrieveContacts ? JSON.parse(retrieveContacts) : [];
  });

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => { return contact.id !== id;});
    setContacts(newContactList);
  };

  useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <div className="ui main" style={{ marginTop: "60px" }}>
        <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} getContactId={removeContactHandler}/>
      </div>
      
    </div>
  );
};

export default App;