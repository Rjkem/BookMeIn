// Third party imports
import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    // Create the NavBar at the top of the page
    <header>
      <div>BookMeIn</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/new-booking">New Booking</Link>
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
