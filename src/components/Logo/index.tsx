import React from 'react';
import { Tilt } from 'react-tilt';

import brain from './brain.png';

const Logo: React.FC = () => (
  <Tilt
    className='absolute top-12 left-12 bg-gradient-pink-blue border-2 border-purple-500 cursor-pointer'
    options={{ max: 55 }}
  >
    <div className='bg-gradient-pink-blue p-3'>
      <img className='object-cover' alt='logo' src={brain} />
    </div>
  </Tilt>
);

export default Logo;
