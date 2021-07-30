// Third party imports
import React from "react";

// Import local files
import "./SessionList.css";
import SessionItem from "./SessionItem";

function SessionList(props) {
  return (
    <ul className={"list"}>
      {props.bookings.map((session) => (
        <SessionItem
          key={session.id}
          id={session.id}
          image={session.image}
          title={session.title}
          date={session.date}
          start_time={session.start_time}
          finish_time={session.finish_time}
          sub_category={session.sub_category}
          max_attendees={session.max_attendees}
        />
      ))}
    </ul>
  );
}

export default SessionList;
