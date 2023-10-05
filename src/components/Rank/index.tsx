import React from 'react';

const Rank: React.FC<{ name: string; entries: number }> = ({
  name,
  entries,
}) => (
  <div>
    <div className='text-white text-3xl'>
      {`${name}, your current entry count is...`}
    </div>
    <div className='text-white text-5xl'>{entries}</div>
  </div>
);

export default Rank;
