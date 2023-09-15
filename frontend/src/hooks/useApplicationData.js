import { useReducer } from 'react';

export function useApplicationData() {
  const initialState = {
    clicked: false,
    photoItemDetails: null,
    count: 0,
    selectedPhotos: {},
  };

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
        const updatedSelectedPhotos = {
          ...state.selectedPhotos,
          [action.photoId]: !state.selectedPhotos[action.photoId],
        };
        return {
          ...state,
          selectedPhotos: updatedSelectedPhotos,
        };

      case 'countClick':
        return {
          ...state,
          count: state.count + action.numToAdd, 
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const getPhotoItemDetails = (photo) => {
    dispatch({ type: 'getPhotoItemDetails', photoData: photo });
  };

  const managePhotoClick = () => {
    dispatch({ type: 'managePhotoClick' });
  };

  const selectedOrNot = (photoId) => {
    dispatch({ type: 'selectedOrNot', photoId})
  }

  const countClick = (increment) => {
    dispatch({ type: 'countClick', numToAdd: increment });
  };

  return {
    state,
    managePhotoClick,
    selectedOrNot,
    getPhotoItemDetails,
    countClick,
  };
}
