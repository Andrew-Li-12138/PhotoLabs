import { useReducer } from 'react';

export function useApplicationData() {
  const initialState = {
    clicked: false,
    photoItemDetails: null,
    count: 0,
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

  const countClick = (increment) => {
    dispatch({ type: 'countClick', numToAdd: increment });
  };

  return {
    state,
    managePhotoClick,
    getPhotoItemDetails,
    countClick,
  };
}
