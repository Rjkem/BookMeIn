// Third party imports.
import { Route, Switch } from "react-router-dom";

// Local imports.
import DashboardPage from "./pages/Dashboard";
import FavouritesPage from "./pages/Favourites";
import NewBookingPage from "./pages/NewBooking";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <Layout>
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
      </Layout>
    </div>
  );
}

export default App;
