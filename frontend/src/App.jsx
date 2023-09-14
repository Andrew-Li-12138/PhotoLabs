import React, {useState} from 'react';
import HomeRoute from 'routes/HomeRoute'
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import topics from 'mocks/topics'

import './App.scss';

const App = (props) => {
  //state for showing <PhotoDetailsModal /> component
  const [clicked, setClicked] = useState(false)
  const managePhotoClick = () => {
    setClicked(!clicked)
  }
  
  //state for retreiving photo data from PhotoListItem and save as state to pass to PhotoDetailsModal
  const [photoItemDetails, setPhotoItemDetails] = useState(null); 
  const getPhotoItemDetails = (photo) => {
    const details = photo
    setPhotoItemDetails(details);
  }

//state to pass down to FavBadge and PhotoLisrItem for fav count num
  const [count, setCount] = useState(0);
  const countClick = (increment) => {
    setCount(count + increment);
  }
  const isFavPhotoExist = count > 0 ? true : false;

  return (
    <div className="App">
     <HomeRoute photos={photos} topics={topics} count={count} isFavPhotoExist={isFavPhotoExist} countClick={countClick} managePhotoClick={managePhotoClick} getPhotoItemDetails={getPhotoItemDetails}/>
     {clicked && <PhotoDetailsModal managePhotoClick={managePhotoClick}  photoItemDetails={photoItemDetails} countClick={countClick}/>}
    </div>
  );
};

export default App;
