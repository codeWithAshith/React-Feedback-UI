import React, { useState } from "react";
import Button from "./shared/Button";
import Card from "./shared/Card";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [message, setMessage] = useState("");

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

  return (
    <Card>
      <form>
        <h2>How would you rate our service?</h2>
        <div className="input-group">
          <input
            type={"text"}
            placeholder="Write a review"
            value={text}
            onChange={handleTextChange}
          />
          <Button type="submit" version="primary" disabled={btnDisabled}>
            Send
          </Button>
        </div>

        {message && <p className="message">{message}</p>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
