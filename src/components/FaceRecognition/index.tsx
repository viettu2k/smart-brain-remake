import React from 'react';
import './FaceRecognition.css';

const FaceRecognition: React.FC<{
  imageUrl: string;
  boxes: {
    topRow: number;
    rightCol: number;
    bottomRow: number;
    leftCol: number;
  }[];
}> = ({ imageUrl, boxes }) => (
  <div className='flex items-center justify-center m-4'>
    <div className='absolute mt-2'>
      <img
        id='inputimage'
        alt=''
        src={imageUrl}
        className='object-cover'
        width='500px'
        height='auto'
      />
      {boxes.map((box) => (
        <div
          key={`box${box.topRow}${box.rightCol}`}
          className='absolute shadow-inset-3 border-blue-500 flex flex-wrap justify-center cursor-pointer'
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
        ></div>
      ))}
    </div>
  </div>
);

export default FaceRecognition;
