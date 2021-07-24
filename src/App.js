// Third party imports.
import { Route, Switch } from "react-router-dom";

// Local imports.
import DashboardPage from "./pages/Dashboard";
import ExistingBookingsPage from "./pages/ExistingBookings";
import FavouritesPage from "./pages/Favourites";
import NewBookingPage from "./pages/NewBooking";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      {/* Show the main navigation bar at the top. */}
      <MainNavigation />
      {/* Routes */}
      <Switch>
        <Route path="/" exact>
          <DashboardPage />
        </Route>
        <Route path="/new-booking">
          <NewBookingPage />
        </Route>
        <Route path="/favourites">
          <FavouritesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
