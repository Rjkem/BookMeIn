// Third party imports
import React, { useContext } from 'react';

// Local imports
import FavouritesContext from '../store/favourites-context';
import SessionList from '../components/sessions/SessionList';

function FavouritesPage() {
  const favouritesCtx = useContext(FavouritesContext);

  let content;

  if (favouritesCtx.totalFavourites === 0) {
    content = <p>You have not added any sessions as favourites yet.</p>
  } else {
    content = <SessionList bookings={favouritesCtx.favourites} />
  }

  return <section>
    <h1>My Favourites</h1>
    {content}
  </section>;
}

export default FavouritesPage;
