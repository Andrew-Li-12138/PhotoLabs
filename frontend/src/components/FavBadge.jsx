import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = (props) => {
  const { isFavPhotoExist, count } = props
  
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={isFavPhotoExist} selected={isFavPhotoExist}/>
      <span>{count}</span>
    </div>
  ) 
};

export default FavBadge;