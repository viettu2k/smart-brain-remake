import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navigation: React.FC<{ isSignedIn: boolean }> = ({ isSignedIn }) => {
  const navigate = useNavigate();

  if (isSignedIn) {
    return (
      <nav className='flex justify-end'>
        <p
          onClick={() => navigate('signout')}
          className='text-lg text-black underline p-3 cursor-pointer'
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav className='flex justify-end'>
        <p
          onClick={() => navigate('signin')}
          className='text-lg text-black underline p-3 cursor-pointer'
        >
          Sign In
        </p>
        <p
          onClick={() => navigate('register')}
          className='text-lg text-black underline p-3 cursor-pointer'
        >
          Register
        </p>
      </nav>
    );
  }
};

export default Navigation;
