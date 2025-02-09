import React, { useState } from 'react';
import "./ContactListManager.css";
 
function ContactListManager() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePhoneChange(event) {
    setPhone(event.target.value);
  }

  function addContact() {
    if (name.trim() !== "" && email.trim() !== "" && phone.trim() !== "") {
      setContacts((prevContacts) => [...prevContacts, { name, email, phone }]);
      setName("");
      setEmail(""); // Clear input fields
      setPhone(""); 
    }
  }

  function deleteContact(index) {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
  }

  return (
    <div className="contact-list-manager">
      <h1>Contact List Manager</h1>
      <div>
        <input
          type="text"
          placeholder="Name..."
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="text"
          placeholder="Email..."
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="text"
          placeholder="Phone number..."
          value={phone}
          onChange={handlePhoneChange}
        />
        <button onClick={addContact}>New Contact</button>
      </div>
      <ol>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.name} - {contact.email} - {contact.phone}
            <button onClick={() => deleteContact(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ContactListManager;

