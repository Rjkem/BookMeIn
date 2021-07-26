// Thid party imports
import React from "react";
import { useHistory } from "react-router-dom";

// Import local files
import NewSessionForm from "../components/bookings/NewSessionForm";

function NewSessionPage() {
  const history = useHistory();

  function addSessionHandler(sessionData) {
    fetch(
      "https://bookmein-4e530-default-rtdb.europe-west1.firebasedatabase.app/sessions.json",
      {
        method: "POST",
        body: JSON.stringify(sessionData),
        headers: {
          "Content-Type": "application/jsopn",
        },
      }
    ).then(() => {
      history.replace('/');
    });
  }

  return (
    <section>
      <h1>Add a Session</h1>
      <NewSessionForm onAddSession={addSessionHandler} />
    </section>
  );
}

export default NewSessionPage;
