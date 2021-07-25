// Import local files
import Card from "../ui/Card";
import classes from "./BookingItem.module.css";

function BookingItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.session} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <date>{props.date}</date>
          <time>
            {props.start_time} - {props.finish_time}
          </time>
          <sub_category>{props.sub_category}</sub_category>
          <attendees>Attending: 0 / {props.max_attendees}</attendees>
        </div>
        <div className={classes.actions}>
          <button>To Favourites</button>
        </div>
      </Card>
    </li>
  );
}

export default BookingItem;
