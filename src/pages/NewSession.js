// Import local files.
import NewSessionForm from "../components/bookings/NewSessionForm";

function NewSessionPage() {
  function addSessionHandler(sessionData) {
    fetch(
      'https://bookmein-4e530-default-rtdb.europe-west1.firebasedatabase.app/sessions.json',
      {
        method: 'POST',
        body: JSON.stringify(sessionData),
        headers: {
          'Content-Type': 'application/jsopn'
        }
      }
    );
  }

  return (
    <section>
      <h1>Add a Session</h1>
      <NewSessionForm onAddSession={addSessionHandler} />
    </section>
  );
}

export default NewSessionPage;
