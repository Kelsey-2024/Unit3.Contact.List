import { useState, useEffect } from 'react';
import './App.css'
import OrganizedNameList from './OrganizedNameList';
import OrganizedEmailAddress from './OrganizedEmailAddress';
import OrganizedPhoneNumber from './OrganizedPhoneNumbers';

function App() {
  const [contactList, setContactList] = useState([])
  const BASE_API_URL = "https://jsonplaceholder.typicode.com"
  
  useEffect(() => {
    const getContacts = async() => {
      const response = await fetch(`${BASE_API_URL}/users`);
      const friendsAndFamily = await response.json();
      console.log(friendsAndFamily);
      setContactList(friendsAndFamily);
    }
    getContacts();
  }, [])
  
  return (
    <>
      <h1>Contact List</h1>
      <section>
        <div>
          <h3>Name</h3>
          <OrganizedNameList contactName={contactList} />
        </div>
        <div>
          <h3>Email Address</h3>
          <OrganizedEmailAddress emailAddress={contactList} />
        </div>
        <div>
          <h3>Phone Number</h3>
          <OrganizedPhoneNumber phoneNumber={contactList}/>
        </div>
      </section>
    </>
  )
}

export default App;