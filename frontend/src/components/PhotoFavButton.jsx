import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  const {countClick, selected, selectedOrNot, id, darkMode} = props;

  const handleFavButtonClick = () => { 
    selectedOrNot(id)
    if (!selected) {
      // If the icon was not selected, increment the count
      countClick(1);
    } else {
      // If the icon was selected, decrement the count
      countClick(-1);
    }
  }
  return (
    <div className={`photo-list__fav-icon`} onClick={handleFavButtonClick}>
      <div className={`photo-list__fav-icon-svg ${darkMode ? 'App-Dark' : ''}`} >
        <FavIcon selected={selected}/>
      </div>
    </div> 
  );
}

export default PhotoFavButton;