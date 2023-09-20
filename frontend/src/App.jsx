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
    getTopicId,
    displaySeletcedPhotos,
    toggleDarkMode,
    fetchAndPassPhotosData
    } = useApplicationData()

  const isFavPhotoExist = state.count > 0 ? true : false;
  
  return (
    <div className={`App ${state.darkMode ? 'App-Dark' : ''}`}>
      <button className="App-Dark_Button" onClick={()=>{toggleDarkMode()}}>DarkMode</button>
     <HomeRoute photos={state.photoData} topics={state.topicData} getTopicId={getTopicId}
     count={state.count} selected={state.selectedPhotos} selectedOrNot={selectedOrNot} fetchAndPassPhotosData={fetchAndPassPhotosData}
     isFavPhotoExist={isFavPhotoExist} countClick={countClick} managePhotoClick={managePhotoClick} 
     getPhotoItemDetails={getPhotoItemDetails} displaySeletcedPhotos={displaySeletcedPhotos} darkMode={state.darkMode}/>
     
     {state.clicked && <PhotoDetailsModal selected={state.selectedPhotos} selectedOrNot={selectedOrNot} managePhotoClick={managePhotoClick} 
     photoItemDetails={state.photoItemDetails} countClick={countClick} darkMode={state.darkMode} />}
    </div>
  );
};

export default App;
