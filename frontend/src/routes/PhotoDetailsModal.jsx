import React from 'react';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';
import photos from 'mocks/photos';
import "../styles/PhotoListItem.scss";
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const { managePhotoClick, photoItemDetails} = props;
  const {id, location, urls, user, similar_photos} = photoItemDetails;
  const similar_photos_array = Object.values(similar_photos);
  console.log(similar_photos)

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={ managePhotoClick }>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <article className="photo-list__item">
      <PhotoFavButton/>
    <img src={urls.full} alt="Image" className="photo-details-modal__image"/>
    <div className=".photo-details-modal__header">
    <img src={user.profile} alt="Profile" className="photo-list__user-profile"/>
    <div>
    <p className="photo-list__user-info">{user.name}</p>
    <p className="photo-list__user-info photo-list__user-location">{location.city}, {location.country} </p>
    </div>
    </div> 
  </article>
  <article className="photo-details-modal__images">
   <PhotoList photos={similar_photos_array} />
   </article>
    </div>
  )
}; 

export default PhotoDetailsModal;
