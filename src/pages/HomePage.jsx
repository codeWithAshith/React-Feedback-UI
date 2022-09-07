import React from "react";

import FeedbackForm from "../components/FeedbackForm";
import FeedbackList from "../components/FeedbackList";
import FeedbackStats from "../components/FeedbackStats";
import AboutIconLink from "../components/AboutIconLink";

const HomePage = () => {
  return (
    <div>
      <FeedbackForm />
      <FeedbackStats />
      <FeedbackList />
      <AboutIconLink />
    </div>
  );
};

export default HomePage;
