import React from 'react';
import HomeRoute from 'routes/HomeRoute'
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { useApplicationData } from 'hooks/useApplicationData';
import './App.scss';

const App = (props) => { 


  const {
    state,
    managePhotoClick,
    selectedOrNot,
    getPhotoItemDetails,
    countClick,
    getTopicId
    } = useApplicationData()

  const isFavPhotoExist = state.count > 0 ? true : false;
 
  return (
    <div className="App">
     <HomeRoute photos={state.photoData} topics={state.topicData} getTopicId={getTopicId}
     count={state.count} selected={state.selectedPhotos} selectedOrNot={selectedOrNot}
     isFavPhotoExist={isFavPhotoExist} countClick={countClick} managePhotoClick={managePhotoClick} 
     getPhotoItemDetails={getPhotoItemDetails}/>
     
     {state.clicked && <PhotoDetailsModal selected={state.selectedPhotos} selectedOrNot={selectedOrNot} managePhotoClick={managePhotoClick} 
     photoItemDetails={state.photoItemDetails} countClick={countClick}/>}
    </div>
  );
};

export default App;
