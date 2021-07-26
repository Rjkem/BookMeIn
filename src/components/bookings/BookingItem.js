// Third party imports
import { useContext } from 'react';

// Import local files
import Card from "../ui/Card";
import classes from "./BookingItem.module.css";
import FavouritesContext from '../../store/favourites-context';

function BookingItem(props) {
  const favouritesCtx = useContext(FavouritesContext);

  const sessionIsFavourite = favouritesCtx.sessionIsFavourite(props.id);

  function toggleFavouriteStatusHandler() {
    if (sessionIsFavourite) {
      favouritesCtx.removeFavourite(props.id);
    } else {
      favouritesCtx.addFavourite({
        id: props.id,
        category: props.category,
        sub_category: props.sub_category,
        title: props.title,
        date: props.date,
        start_time: props.start_time,
        finish_time: props.finish_time,
        max_attendees: props.max_attendees,
        image: props.image
      });
    }
  }

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
          <button onClick={toggleFavouriteStatusHandler}>{sessionIsFavourite ? 'Remove from Favourites' : 'Add to Favourites'}</button>
        </div>
      </Card>
    </li>
  );
}

export default BookingItem;
