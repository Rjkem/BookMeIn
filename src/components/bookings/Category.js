// Third party imports
import React, { useState, useEffect } from "react";

// Local imports
import CategoryList from "../bookings/CategoryList";

function Category() {
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
            ...data[key],
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
      <h1>Top level categories</h1>
      <CategoryList bookings={loadedSessions} />
    </section>
  );
}

export default Category;
