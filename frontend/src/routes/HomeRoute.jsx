import React,{useState} from 'react';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss'

const HomeRoute = (props) => {
  const {photos, topics, managePhotoClick} = props;
  const [count, setCount] = useState(0);
  //state to pass down to FavBadge and PhotoLisrItem for fav count num
  const countClick = (increment) => {
    setCount(count + increment);
  }
  const isFavPhotoExist = count > 0 ? true : false;


  return (
    <div className="home-route">
    <TopNavigation topics={topics} count={count} isFavPhotoExist={isFavPhotoExist}/>
    <PhotoList photos={photos} countClick={countClick} managePhotoClick={managePhotoClick}/>
    </div>
  )
}

export default HomeRoute;