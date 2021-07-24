// Import local files
import classes from "./BookingList.module.css";
import BookingItem from "./BookingItem";

function BookingList(props) {
  return (
    <ul className={classes.list}>
      {props.bookings.map((booking) => (
        <BookingItem
          key={booking.id}
          id={booking.id}
          image={booking.image}
          session={booking.session}
          date={booking.date}
          start_time={booking.start_time}
          finish_time={booking.finish_time}
          category={booking.category}
          attendees={booking.attendees}
        />
      ))}
    </ul>
  );
}

export default BookingList;
