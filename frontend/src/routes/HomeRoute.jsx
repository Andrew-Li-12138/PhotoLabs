import React from 'react';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss'

const HomeRoute = (props) => {
  const {photos, topics, getTopicId, selected, selectedOrNot, managePhotoClick, getPhotoItemDetails, 
    count, countClick, isFavPhotoExist, displaySeletcedPhotos, darkMode, fetchAndPassPhotosData} = props;
    
  return (
    <div className="home-route">
    <TopNavigation topics={topics} getTopicId={getTopicId} count={count} isFavPhotoExist={isFavPhotoExist} 
    displaySeletcedPhotos={displaySeletcedPhotos} fetchAndPassPhotosData={fetchAndPassPhotosData}/>
    <PhotoList photos={photos} selected={selected} selectedOrNot={selectedOrNot} countClick={countClick} managePhotoClick={managePhotoClick} 
    getPhotoItemDetails={getPhotoItemDetails} darkMode={darkMode}/>
    </div>
  )
}

export default HomeRoute;