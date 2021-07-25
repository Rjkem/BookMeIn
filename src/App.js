// Third party imports.
import { Route, Switch } from "react-router-dom";

// Local imports.
import DashboardPage from "./pages/Dashboard";
import FavouritesPage from "./pages/Favourites";
import NewSessionPage from "./pages/NewSession";
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
          <Route path="/new-session">
            <NewSessionPage />
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
