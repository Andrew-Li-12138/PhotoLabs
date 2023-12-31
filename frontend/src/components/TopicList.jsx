import React from "react";
import TopicListItem from "./TopicListItem";

import "../styles/TopicList.scss";

const TopicList = (props) => {
  const {topics, getTopicId} = props; 
  return (
    <div className="top-nav-bar__topic-list">
    {topics.map((topic) => {
     return <TopicListItem key={topic.id} topicListItem={topic} getTopicId={getTopicId} />
    })}
    </div>
  );
};

export default TopicList;
