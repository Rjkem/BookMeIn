// Third party imports.
import { Link } from "react-router-dom";

// Local imports.
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    // Create the NavBar at the top of the page
    <header className={classes.header}>
      <div className={classes.logo}>BookMeIn</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/new-session">New Session</Link>
          </li>
          <li>
            <Link to="/favourites">My Favourites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
