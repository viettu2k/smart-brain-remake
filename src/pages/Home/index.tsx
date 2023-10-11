import React from 'react';

import Logo from '../../components/Logo';
import Rank from '../../components/Rank';
import ImageLinkForm from '../../components/ImageLinkForm';

const Home: React.FC = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div className='h-full w-full relative'>
      <Logo />
      <Rank name='lamo' entries={3} />
      <ImageLinkForm
        onButtonSubmit={() => console.log(123)}
        onInputChange={handleChange}
      />
    </div>
  );
};

export default Home;
