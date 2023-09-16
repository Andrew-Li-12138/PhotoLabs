import React from 'react';
import FavBadge from './FavBadge';
import TopicList from 'components/TopicList';
import '../styles/TopNavigationBar.scss'

const TopNavigation = (props) => {
  const {topics, getTopicId, count, isFavPhotoExist} = props
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} getTopicId={getTopicId}/>
      <FavBadge count={count} isFavPhotoExist={isFavPhotoExist}/>
    </div>
  )
}

export default TopNavigation;