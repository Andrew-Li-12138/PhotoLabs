import React,{useState} from 'react';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss'

const HomeRoute = (props) => {
  const {photos, topics, managePhotoClick, getPhotoItemDetails, count, countClick, isFavPhotoExist} = props;

  return (
    <div className="home-route">
    <TopNavigation topics={topics} count={count} isFavPhotoExist={isFavPhotoExist}/>
    <PhotoList photos={photos} countClick={countClick} managePhotoClick={managePhotoClick} getPhotoItemDetails={getPhotoItemDetails}/>
    </div>
  )
}

export default HomeRoute;