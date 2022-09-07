import React from "react";
import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ feedback , handleDeleteFeedback}) => {

  if (!feedback || feedback.length === 0) {
    return <p>No feedback Yet</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} 
        handleDelete={handleDeleteFeedback}/>
      ))}
    </div>
  );
};

export default FeedbackList;
