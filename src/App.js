import FeedbackItem from "./component/FeedbackItem";
import Header from "./component/Header";

const App = () => {
  return (
    <>
      <Header
        text="Feedback UI"
        bgColor="rgba(0,0,0,0.4)"
        textColor="#ff6a95"
      />
      <div className="container">
        <FeedbackItem />
      </div>
    </>
  );
};

export default App;
