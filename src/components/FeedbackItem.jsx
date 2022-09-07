import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import Card from "./shared/Card";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackItem = ({ item }) => {

  const { handleDeleteFeedback } = useContext(FeedbackContext);

  return (
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => handleDeleteFeedback(item.id)}>
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
