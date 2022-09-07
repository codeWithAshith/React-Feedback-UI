import { useState } from "react";
import FeedbackData from "./data/FeedbackData";
import Header from "./component/Header";
import FeedbackList from "./component/FeedbackList";
import FeedbackStats from "./component/FeedbackStats";
import FeedbackForm from "./component/FeedbackForm";

const App = () => {
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
    <>
      <Header
        text="Feedback UI"
        bgColor="rgba(0,0,0,0.4)"
        textColor="#ff6a95"
      />
      <div className="container">
        <FeedbackForm
          handleAddFeedback={handleAddFeedback}
          feedback={feedback}
        />
        <FeedbackStats feedback={feedback} />
        <FeedbackList
          feedback={feedback}
          handleDeleteFeedback={handleDeleteFeedback}
        />
      </div>
    </>
  );
};

export default App;
