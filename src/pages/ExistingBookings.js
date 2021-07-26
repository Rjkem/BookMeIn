// Third party imports
import React, { useState, useEffect } from "react";

// Import local files
import BookingList from "../components/bookings/BookingList";

function ExistingBookings() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedSessions, setLoadedSessions] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://bookmein-4e530-default-rtdb.europe-west1.firebasedatabase.app/sessions.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const sessions = [];

        for (const key in data) {
          const session = {
            id: key,
            ...data[key]
          };

          sessions.push(session);
        }

        setIsLoading(false);
        setLoadedSessions(sessions);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h2>Existing Bookings:</h2>
      <BookingList bookings={loadedSessions} />
    </section>
  );
}

export default ExistingBookings;
