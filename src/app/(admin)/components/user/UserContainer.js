// Example of a container component
import React, { useState, useEffect } from 'react';
import UserProfile from './UserProfile';

function UserContainer() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/api/user')
      .then(response => response.json())
      .then(data => setUser(data));
  }, []);

  return user ? <UserProfile {...user} /> : <div>Loading...</div>;
}