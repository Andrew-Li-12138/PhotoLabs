import { useReducer, useEffect } from 'react';
import reducer from './reduce';

export function useApplicationData() {

  const initialState = {
    clicked: false,
    photoItemDetails: null,
    count: 0,
    selectedPhotos: {},
    photoData: [],
    topicData: [],
    topicId: null
  };

  const [state, dispatch] = useReducer(reducer, initialState);
 
  //fetch photos and topics data from API call and update state.photoData & state.photoData
  useEffect(() => {
    fetchAndPassPhotosData();//to updtae state.photoData
    fetchAndpassTopicsData();//to update state.photoData
  }, []);

//fetch photos for certain topics when state.topicId is updated
  useEffect(() => {
    fetchAndPassPhotosForTopic();  
}, [state.topicId]); 

  const fetchAndPassPhotosData = () => {
    fetch('/api/photos')
      .then((response) => {
        if (!response.ok) {
          console.log(`HTTP Error fetching photos! ${response.status}`);
        }
        return response.json();
      })
      .then((photos) => dispatch({ type: 'passPhotosData', photoData: photos }))
      .catch((error) => {
        console.error('Error fetching photos data:', error);
      });
  };

  const fetchAndpassTopicsData = () => {
    fetch('/api/topics')
    .then((response) => {
      if (!response.ok) {
        console.log(`HTTP Error fetching topics! ${response.status}`);
      }
      return response.json();
    })
    .then((topics) => dispatch({ type: 'passTopicsData', topicData: topics }))
    .catch((error) => {
      console.error('Error fetching topics data:', error);
    });
};
   
   const fetchAndPassPhotosForTopic =() => {
     const {topicId} = state
     if(topicId) {
      fetch(`api/topics/photos/${topicId}`)
    .then((response) => {
      if (!response.ok) {
        console.log(`HTTP Error fetching photos for topic! ${response.status}`);
      }
      return response.json();
    })
    .then((photos) => dispatch({ type: 'passPhotosData', photoData: photos }))
    .catch((error) => {
      console.error('Error fetching photos for topic:', error);
    });
     }
   } 
  
   //called in PhotoListItem component at img's onClick even. Get data about specific picture
  const getPhotoItemDetails = (photo) => {
    dispatch({ type: 'getPhotoItemDetails', photoData: photo });
  };
  
  //toggle boolean value of state.clicked which is called on PhotoListItem img onClick to determines if PhotoDetailModel can be rendered or not 
  const managePhotoClick = () => {
    dispatch({ type: 'managePhotoClick' });
  };
  
  //toggle state.selectedPhotos and assign boolean value to photoId. Called in PhotoFavButton onClick. Use photoId to help select individual FavButton
  const selectedOrNot = (photoId) => {
    dispatch({ type: 'selectedOrNot', photoId: photoId})
  }
  
  const displaySeletcedPhotos = () => {
    dispatch({type: 'displaySelectedPhotos'})
  }
  //change state.count to help display number of favs at navigation bar
  const countClick = (increment) => {
    dispatch({ type: 'countClick', numToAdd: increment });
  };
 
  //called at onClick in TopicListItem component and pass topicId to state.topicId, which is used in fetchAndPassPhotosForTopic 
  const getTopicId = (topicId) => {
    dispatch({type:'passTopicId', topicId: topicId})
  }

  return {
    state,
    managePhotoClick,
    selectedOrNot,
    getPhotoItemDetails,
    countClick,
    getTopicId,
    displaySeletcedPhotos
  };
}
