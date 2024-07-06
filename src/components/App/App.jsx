import ContactForm from "../ContactForm/ContactForm";
import { useState, useEffect } from "react";
import ContactList from "../ContactList/ContactList";
import { nanoid } from "nanoid";
import SearchBox from "../SearchBox/SearchBox";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : [];
  });
  const [searchTerm, setSearchTerm] = useState("");

 const handleSearchChange = (event) => {
   setSearchTerm(event.target.value);
 };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
  
 const handleAddContact = (name, number) => {
   const newContact = {
     id: nanoid(),
     name,
     number,
   };
   setContacts([...contacts, newContact]);
 };

    const handleDeleteContact = (id) => {
      setContacts(contacts.filter((contact) => contact.id !== id));
    };
  
 const filteredContacts = contacts.filter((contact) =>
   contact.name.toLowerCase().includes(searchTerm.toLowerCase())
 );
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App;
