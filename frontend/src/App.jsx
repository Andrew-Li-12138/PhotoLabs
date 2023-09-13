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

  return (
    <div className="App">
     <HomeRoute photos={photos} topics={topics} managePhotoClick={managePhotoClick}/>
     {clicked && <PhotoDetailsModal manageCloseClick={managePhotoClick}/>}
    </div>
  );
};

export default App;
