import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [selected, setSelect] = useState(false);
  const [displayAlert, setDisplayAlert] = useState(false);

 const handleFavButtonClick = () => {
    setSelect(!selected);
    setDisplayAlert(!displayAlert)
  }

  return (
    <div className="photo-list__fav-icon"  onClick={handleFavButtonClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon displayAlert={displayAlert} selected={selected}/>
      </div>
    </div> 
  );
}

export default PhotoFavButton;