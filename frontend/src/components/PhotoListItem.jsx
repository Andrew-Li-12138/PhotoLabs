import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  console.log(props.photoListItem)
  const {id, location, urls, user} = props.photoListItem;
  const {countClick, managePhotoClick, getPhotoItemDetails} = props;

  const handleClick = ()=> {
    console.log(props.photoListItem)
    getPhotoItemDetails(props.photoListItem)
    managePhotoClick()
    
  }

  return (
    <article className="photo-list__item">
    <PhotoFavButton countClick={countClick}/>
    <img src={urls.regular} alt="Image" className="photo-list__image" onClick={handleClick}/>
    <div className="photo-list__user-details">
    <img src={user.profile} alt="Profile" className="photo-list__user-profile"/>
    <div>
    <p className="photo-list__user-info">{user.name}</p>
    <p className="photo-list__user-info photo-list__user-location">{location.city}, {location.country} </p>
    </div>
    </div> 
  </article>
  ) 

}; 

export default PhotoListItem; 
