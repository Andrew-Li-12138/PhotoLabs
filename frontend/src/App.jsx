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

  return (
    <div className="App">
     <HomeRoute photos={photos} topics={topics} managePhotoClick={managePhotoClick} getPhotoItemDetails={getPhotoItemDetails}/>
     {clicked && <PhotoDetailsModal managePhotoClick={managePhotoClick}  photoItemDetails={photoItemDetails}/>}
    </div>
  );
};

export default App;
