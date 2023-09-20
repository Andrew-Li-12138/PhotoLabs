import React from 'react';
import FavBadge from './FavBadge';
import TopicList from 'components/TopicList';
import '../styles/TopNavigationBar.scss'

const TopNavigation = (props) => {
  const {topics, getTopicId, count, isFavPhotoExist, displaySeletcedPhotos, fetchAndPassPhotosData} = props
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={()=>fetchAndPassPhotosData()}>PhotoLabs</span>
      <TopicList topics={topics} getTopicId={getTopicId} displaySeletcedPhotos={displaySeletcedPhotos}/>
      <span onClick={()=>{displaySeletcedPhotos()}} className="top-nav-bar__fav">Favorites</span>
      <FavBadge count={count} isFavPhotoExist={isFavPhotoExist}/>
    </div>
  )
}

export default TopNavigation;