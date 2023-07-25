import React, { createContext, useState } from 'react';

// Create the UserContext
export const UserContext = createContext();

// Create a UserProvider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: '',
    contact_number: '',
    profession: '',
    availability: '',
    profile_picture: '',
  });

  const updateUserField = (field, value) => {
    setUser((prevUser) => ({ ...prevUser, [field]: value }));
  };

  return (
    <UserContext.Provider value={{ user, updateUserField }}>
      {children}
    </UserContext.Provider>
  );
};

