import React from 'react';

const ImageLinkForm: React.FC<{
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onButtonSubmit: () => void;
}> = ({ onInputChange, onButtonSubmit }) => (
  <div>
    <p className='text-3xl'>
      {'This Magic Brain will detect faces in your pictures. Give it a try.'}
    </p>
    <form className='flex justify-center bg-image-link-form w-[700px] bg-auto'>
      <div className='w-96 p-4 rounded-lg shadow-md'>
        <input
          className='w-3/4 px-2 py-1 text-lg rounded-l border border-r-0 focus:outline-none focus:ring focus:border-blue-300'
          type='text'
          onChange={onInputChange}
        />
        <button
          className='w-1/4 px-3 py-2 text-lg text-white bg-purple-400 hover:bg-purple-500 rounded-r focus:outline-none focus:ring'
          onClick={onButtonSubmit}
        >
          Detect
        </button>
      </div>
    </form>
  </div>
);

export default ImageLinkForm;
