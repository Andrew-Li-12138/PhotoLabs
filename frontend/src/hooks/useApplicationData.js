import { useState } from 'react';

export function useApplicationData() {
    
  const [state, setState]= useState({
    clicked:false,
    photoItemDetails: null,
    count: 0,
  })

   
    //state for retreiving photo data from PhotoListItem and save as state to pass to PhotoDetailsModal
    const getPhotoItemDetails = (photo) => {
      setState((prevState) => ({...prevState, photoItemDetails: photo}));
    }

     //state for toggling showing and closing <PhotoDetailsModal /> component 
     const managePhotoClick = () => {
      setState((prevState) => ({ ...prevState, clicked: !prevState.clicked }));
    };
    
  
  //state to pass down to FavBadge and PhotoLisrItem for fav count num
    const countClick = (increment) => {
      setState({...state, count: state.count + increment});
    }

    return {
    state,
    managePhotoClick,
    getPhotoItemDetails,
    countClick,
    };
}