// Import local files
import classes from "./BookingItem.module.css";

function BookingItem(props) {
  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <img src={props.image} alt={props.session} />
      </div>
      <div className={classes.content}>
        <h3>{props.session}</h3>
        <date>{props.date}</date>
        <time>
          {props.start_time} - {props.finish_time}
        </time>
        <category>{props.category}</category>
        <attendees>{props.attendees}</attendees>
      </div>
      <div className={classes.actions}>
        <button>To Favourites</button>
      </div>
    </li>
  );
}

export default BookingItem;
