import React from 'react';

//import PhotoListItem from './components/PhotoListItem';
import PhotoList from 'components/PhotoList';
//import TopicListItem from 'components/TopicListItem';
import TopicList from 'components/TopicList';
import './App.scss';

//helpfer function for rendering <PhotolistItem /> multiple times
const photoListItemsMutiplyBy = (times) => {
  return Array.from({ length: times }, (_, index) => {
    return {
      ...sampleDataForPhotoListItem,
      //increment id by one for each rendering which will be used as value for key 
      id: `${index + 1}`,
    };
  });
};

const App = (props) => {

  // const multiplePhotoListItems = photoListItemsMutiplyBy(3).map((item)=>{
  //  return <PhotoListItem sampleDataForPhotoListItem={item} key={item.id}/>
  // })

  return (
    <div className="App">
      {/* {multiplePhotoListItems} */}
      <TopicList />
      <PhotoList />
    </div>
  );
};

export default App;
