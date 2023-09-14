import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const { managePhotoClick, photoItemDetails} = props;
  const {id, location, urls, user} = photoItemDetails;
  console.log(id, location, urls, user)

  return (
    <div className="photo-details-modal">

      <button className="photo-details-modal__close-button" onClick={ managePhotoClick }>
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
