import React from 'react';
import Lottie from 'lottie-react';

import loader from '../../assets/loader.json';

import '@/styles/loader.css';

export const Loader = () => {
  return (
    <div className='loaderContainer'>
      <Lottie
        width={300}
        style={{ maxWidth: 600, maxHeight: 600 }}
        height={300}
        animationData={loader}
      />
    </div>
  );
};
