import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";


const PhotoList = (props) => {
  const sampleDataForPhotoList = props.photos 
  const {countClick, managePhotoClick, getPhotoItemDetails, selected, selectedOrNot} = props

  return (
    <ul className="photo-list">
    {sampleDataForPhotoList.map((photoListItem)=>{  
     return <PhotoListItem key={photoListItem.id} selected={selected[photoListItem.id]||false} selectedOrNot={() => selectedOrNot(photoListItem.id)} photoListItem={photoListItem} countClick={countClick} managePhotoClick={managePhotoClick} 
     getPhotoItemDetails={getPhotoItemDetails}/>
    })}
    </ul>
  );
};

export default PhotoList; 
