import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navigation: React.FC<{ isSignedIn: boolean }> = ({ isSignedIn }) => {
  const navigate = useNavigate();

  if (isSignedIn) {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p
          onClick={() => navigate('signout')}
          className='f3 link dim black underline pa3 pointer'
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p
          onClick={() => navigate('signin')}
          className='f3 link dim black underline pa3 pointer'
        >
          Sign In
        </p>
        <p
          onClick={() => navigate('register')}
          className='f3 link dim black underline pa3 pointer'
        >
          Register
        </p>
      </nav>
    );
  }
};
export default Navigation;
