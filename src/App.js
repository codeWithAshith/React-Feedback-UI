import { useState } from "react";
import FeedbackItem from "./component/FeedbackItem";
import FeedbackData from "./data/FeedbackData";
import Header from "./component/Header";
import FeedbackList from "./component/FeedbackList";

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)
  return (
    <>
      <Header
        text="Feedback UI"
        bgColor="rgba(0,0,0,0.4)"
        textColor="#ff6a95"
      />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
};

export default App;
