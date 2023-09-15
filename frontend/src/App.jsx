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
    selectedOrNot,
    getPhotoItemDetails,
    countClick,
    } = useApplicationData()

  const isFavPhotoExist = state.count > 0 ? true : false;
 
  return (
    <div className="App">
     <HomeRoute photos={photos} topics={topics} count={state.count} selected={state.selectedPhotos} selectedOrNot={selectedOrNot}
     isFavPhotoExist={isFavPhotoExist} countClick={countClick} managePhotoClick={managePhotoClick} getPhotoItemDetails={getPhotoItemDetails}/>
     {state.clicked && <PhotoDetailsModal selected={state.selectedPhotos} selectedOrNot={selectedOrNot} managePhotoClick={managePhotoClick} 
     photoItemDetails={state.photoItemDetails} countClick={countClick}/>}
      {console.log(state.selectedPhotos)}
    </div>
  );
};

export default App;
