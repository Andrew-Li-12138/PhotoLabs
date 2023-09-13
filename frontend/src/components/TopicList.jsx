import React from "react";
import TopicListItem from "./TopicListItem";

import "../styles/TopicList.scss";

const TopicList = (props) => {
  const sampleDataForTopicList = props.topics;
  return (
    <div className="top-nav-bar__topic-list">
    {sampleDataForTopicList.map((topicListItem) => {
     return <TopicListItem key={topicListItem.id} topicListItem={topicListItem}/>
    })}
    </div>
  );
};

export default TopicList;
