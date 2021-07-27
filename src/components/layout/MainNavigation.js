// Third party imports.
import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Local imports.
import "./MainNavigation.module.css";
import FavouritesContext from "../../store/favourites-context";

function MainNavigation() {
  const favouritesCtx = useContext(FavouritesContext);

  return (
    // Create the NavBar at the top of the page
    <header className={"header"}>
      <div className={"logo"}>BookMeIn</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/new-session">New Session</Link>
          </li>
          <li>
            <Link to="/favourites">
              My Favourites<span className={"badge"}>{favouritesCtx.totalFavourites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
