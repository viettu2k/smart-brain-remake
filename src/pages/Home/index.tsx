import React from 'react';

import Logo from '../../components/Logo';

const Home: React.FC = () => {
  return (
    <div className='h-full w-full relative'>
      <Logo />
      <h1>Hello World</h1>
    </div>
  );
};

export default Home;
