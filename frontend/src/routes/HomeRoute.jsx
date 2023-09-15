import React,{useState} from 'react';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss'

const HomeRoute = (props) => {
  const {photos, topics, selected, selectedOrNot, managePhotoClick, getPhotoItemDetails, count, countClick, isFavPhotoExist} = props;

  return (
    <div className="home-route">
    <TopNavigation topics={topics} count={count} isFavPhotoExist={isFavPhotoExist}/>
    <PhotoList photos={photos} selected={selected} selectedOrNot={selectedOrNot} countClick={countClick} managePhotoClick={managePhotoClick} getPhotoItemDetails={getPhotoItemDetails}/>
    </div>
  )
}

export default HomeRoute;