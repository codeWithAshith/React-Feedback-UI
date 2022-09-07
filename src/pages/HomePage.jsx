import React, { useState } from "react";
import FeedbackForm from "../components/FeedbackForm";
import FeedbackList from "../components/FeedbackList";
import FeedbackStats from "../components/FeedbackStats";
import FeedbackData from "../data/FeedbackData";
import AboutIconLink from "../components/AboutIconLink";

const HomePage = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const handleDeleteFeedback = (id) => {
    if (window.confirm("Are you sure you wanna delete?"))
      setFeedback(feedback.filter((feedback) => feedback.id !== id));
  };

  const handleAddFeedback = (newFeedback) => {
    console.log(newFeedback);
    setFeedback([newFeedback, ...feedback]);
  };
  return (
    <div>
      <FeedbackForm handleAddFeedback={handleAddFeedback} feedback={feedback} />
      <FeedbackStats feedback={feedback} />
      <FeedbackList
        feedback={feedback}
        handleDeleteFeedback={handleDeleteFeedback}
      />
      <AboutIconLink />
    </div>
  );
};

export default HomePage;
