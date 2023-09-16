import React from "react";

import "../styles/TopicListItem.scss";
import HomeRoute from "routes/HomeRoute";

const TopicListItem = (props) => {
  const { id, slug, title } = props.topicListItem
  const {getTopicId} = props
 
  return (
    <div className="topic-list__item" onClick={()=>getTopicId(id)}>
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
