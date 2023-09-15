import React from 'react';
import HomeRoute from 'routes/HomeRoute'
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import topics from 'mocks/topics'
import { useApplicationData } from 'hooks/useApplicationData';
import './App.scss';

const App = (props) => {


  const {
    state,
    managePhotoClick,
    getPhotoItemDetails,
    countClick,
    } = useApplicationData()

  const isFavPhotoExist = state.count > 0 ? true : false;
 

  
  return (
    <div className="App">
     <HomeRoute photos={photos} topics={topics} count={state.count} isFavPhotoExist={isFavPhotoExist} countClick={countClick} managePhotoClick={managePhotoClick} getPhotoItemDetails={getPhotoItemDetails}/>
     {state.clicked && <PhotoDetailsModal managePhotoClick={managePhotoClick}  photoItemDetails={state.photoItemDetails} countClick={countClick}/>}
    </div>
  );
};

export default App;
