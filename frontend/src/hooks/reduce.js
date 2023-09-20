
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
      };

    case 'displaySelectedPhotos':
      const selectedPhotoId = Object.keys(state.selectedPhotos)
      const getSelectedPhotosDetails = (photoIds, photoData) => {
        const photoIdsNum = photoIds.map((str)=>parseInt(str, 10))
        return photoData.filter((photoItem) => {
          return photoIdsNum.includes(photoItem.id);
        });
      };
      const selectedPhotosDetails = getSelectedPhotosDetails(selectedPhotoId, state.photoData)

      return {
        ...state,
        photoData: selectedPhotosDetails,
      };

      case 'toggleDarkMode':
        return {
        ...state,
        darkMode: !state.darkMode,
        }

    default:
      return state;
  }
  
        
};

export default reducer