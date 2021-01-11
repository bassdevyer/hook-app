import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const LoginScreen = () => {
  const { setUser } = useContext(UserContext)

  return (
    <div>
      <h1>Login Screen</h1>
      <hr/>
      <button className='btn btn-primary'
              onClick={() => setUser({ id: 1234, name: 'Miguel' })}>Login
      </button>
    </div>
  );
};

export default LoginScreen;
