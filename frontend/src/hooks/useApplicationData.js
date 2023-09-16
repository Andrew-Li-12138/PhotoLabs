import { useReducer, useEffect } from 'react';

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

  useEffect(() => {
    fetchAndPassPhotosData();//to state.photoData
    fetchAndpassTopicsData();//to state.topicData
  }, []);


  const reducer = (state, action) => {
    switch (action.type) {
      case 'getPhotoItemDetails':
        return {
          ...state,
          photoItemDetails: action.photoData, 
        };

      case 'managePhotoClick':
        return {
          ...state,
          clicked: !state.clicked,
        };

      case 'selectedOrNot':
        const toggleSelectedPhotos = {
          ...state.selectedPhotos,
          [action.photoId]: !state.selectedPhotos[action.photoId],
        };
        return {
          ...state,
          selectedPhotos: toggleSelectedPhotos,
        };

      case 'countClick':
        return {
          ...state,
          count: state.count + action.numToAdd, 
        };

      case 'passPhotosData':
        return {
          ...state,
          photoData: action.photoData,
        };

      case 'passTopicsData':
        return {
          ...state,
          topicData: action.topicData,
        };
      
      case 'passTopicId':
        return {
          ...state,
          topicId: action.topicId,
        }

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);


  useEffect(() => {
   
    fetchAndPassPhotosForTopic(); // Fetch photos for the selected topic
  
}, [state.topicId]); // Updated by state.topicID

  const fetchAndPassPhotosData = () => {
    fetch('http://localhost:8001/api/photos')
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
    fetch('http://localhost:8001/api/topics')
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
      fetch(`http://localhost:8001/api/topics/photos/${topicId}`)
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

  const getPhotoItemDetails = (photo) => {
    dispatch({ type: 'getPhotoItemDetails', photoData: photo });
  };

  const managePhotoClick = () => {
    dispatch({ type: 'managePhotoClick' });
  };

  const selectedOrNot = (photoId) => {
    dispatch({ type: 'selectedOrNot', photoId: photoId})
  }

  const countClick = (increment) => {
    dispatch({ type: 'countClick', numToAdd: increment });
  };

  const getTopicId = (topicId) => {
    dispatch({type:'passTopicId', topicId: topicId})
  }

  return {
    state,
    managePhotoClick,
    selectedOrNot,
    getPhotoItemDetails,
    countClick,
    getTopicId
  };
}
