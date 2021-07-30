// Third party imports
import React from "react";
import { Route, Switch } from "react-router-dom";

// Import local files
import CategoryList from '../components/bookings/Category';
import SubCategoryList from '../components/bookings/SubCategoryList';

// Get the user imports from the form
function NewBooking(props) {
  return (
    <section>
      <h1>Create a New Booking</h1>
      <Switch>
        <Route path="/new-booking/" exact>
          <CategoryList />
        </Route>
        <Route path="/new-booking/role-related">
          <SubCategoryList />
        </Route>
        <Route path="/new-booking/sports-facilites">
          <SubCategoryList />
        </Route>
        <Route path="/new-booking/session">
          <SubCategoryList />
        </Route>
      </Switch>
    </section>
  );
}

export default NewBooking;
