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
          title={booking.title}
          date={booking.date}
          start_time={booking.start_time}
          finish_time={booking.finish_time}
          sub_category={booking.sub_category}
          max_attendees={booking.max_attendees}
        />
      ))}
    </ul>
  );
}

export default BookingList;
