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

/*
self assessment:

Problem 1, Wrong casing :

return (
    <div className="Contact-collection">
      <h1>Contact List Manager</h1>

Here "Contact-collection" was different than the one in css file ("contact-collection") so the css didn't show up on the page.

(fixed version) 

return (
    <div className="contact-collection">
      <h1>Contact List Manager</h1>


Lesson learned: Be more aware of upper/lowercase letters in coding while troubleshooting. 

Successess:

After lessons and by following example codes given in the coding marathon this exercise went well.
I got to a desired outcome without many problems.

Areas for Improvement:

Better understanding of the code, adding more variability and functionality + creating a even better UI with CSS.

*/