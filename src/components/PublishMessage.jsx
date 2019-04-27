import React, { useState } from "react";
import { newMessage } from "../state/actions";
import { useAppContext } from "./hooks";

const PublishMessage = () => {
  const {
    state: { username },
    pubsub: { publish }
  } = useAppContext();
  const [text, setText] = useState("");

  const updateText = event => {
    setText(event.target.value);
  };

  const publishMessage = () => {
    console.log("Message: ", text);
    publish(newMessage({ text, username }));
  };

  const handleKeyPress = event => {
    if (event.key === "Enter") {
      publishMessage();
    }
  };

  return (
    <div>
      <h3>Got something to say?</h3>
      <input
        type="text"
        value={text}
        onChange={updateText}
        onKeyPress={handleKeyPress}
      />
      <button onClick={publishMessage}>Pulish It!</button>
    </div>
  );
};

export default PublishMessage;
