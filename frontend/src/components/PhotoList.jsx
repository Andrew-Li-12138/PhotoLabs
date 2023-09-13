import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";


const PhotoList = (props) => {
  const sampleDataForPhotoList = props.photos
  const countClick = props.countClick
  return (
    <ul className="photo-list">
    {sampleDataForPhotoList.map((photoListItem)=>{ 
     return <PhotoListItem key={photoListItem.id} photoListItem={photoListItem} countClick={countClick}/>
    })}
    </ul>
  );
};

export default PhotoList;
