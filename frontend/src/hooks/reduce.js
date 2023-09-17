
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

export default reducer