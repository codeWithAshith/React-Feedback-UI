import { createContext, useState } from "react";

import feedbackData from "../data/FeedbackData";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(feedbackData);

  const handleDeleteFeedback = (id) => {
    if (window.confirm("Are you sure you wanna delete?"))
      setFeedback(feedback.filter((feedback) => feedback.id !== id));
  };

  const handleAddFeedback = (newFeedback) => {
    console.log(newFeedback);
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        handleAddFeedback,
        handleDeleteFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
