import React, { useContext, useState } from "react";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import Card from "./shared/Card";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackForm = () => {
  const { handleAddFeedback, feedback } = useContext(FeedbackContext);

  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);

  const handleTextChange = (event) => {
    setText(event.target.value);
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Text must be at least 10 character");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text !== "" && text.trim().length > 10) {
      const newFeedback = { text, rating };
      newFeedback.id = feedback.length + 1;
      handleAddFeedback(newFeedback);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate our service?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            type={"text"}
            placeholder="Write a review"
            value={text}
            onChange={handleTextChange}
          />
          <Button type="submit" version="primary" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>

        {message && <p className="message">{message}</p>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
