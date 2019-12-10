import React, { useState, useMemo, useEffect } from 'react';
import userService from '../../services/user-service';

export const UserContext = React.createContext({});

const ContextWrapper = ({ children }) => {

  const [user, setUser] = useState(undefined);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    setIsLogged(!!user);
  }, [user])

  useEffect(() => {
    (async () => {
      try {
        const user = await userService.isAuth();
        setUser(user);
      } catch (err) {
        setUser(null);
      }
    })();
  }, []);

  const userStore = useMemo(() => ({
    user,
    isLogged,
    setUser
  }), [user, isLogged]);

  return (
    <UserContext.Provider value={userStore}>
      {children}
    </UserContext.Provider>
  );
};

export default ContextWrapper;