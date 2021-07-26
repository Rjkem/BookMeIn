import { createContext, useState } from "react";

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourite: (favouriteSession) => {},
  removeFavourite: (sessionId) => {},
  sessionIsFavourite: (sessionId) => {}
});

export function FavouritesContextProvider(props) {
  const [userFavourites, setUserFavourites] = useState([]);

  function addFavouriteHandler(favouriteSession) {
      setUserFavourites((prevUserFavourites) => {
          return prevUserFavourites.concat(favouriteSession);
      });
  }

  function removerFavouriteHandler(sessionId) {
      setUserFavourites(prevUserFavourites => {
          return prevUserFavourites.filter(session => session.id !== sessionId);
      });
  }

  function sessionIsFavouriteHandler(sessionId) {
      return userFavourites.some(session => session.id === sessionId);
  }

  const context = {
      favourites: userFavourites,
      totalFavourites: userFavourites.length,
      addFavourite: addFavouriteHandler,
      removeFavourite: removerFavouriteHandler,
      sessionIsFavourite: sessionIsFavouriteHandler
  };

  return;
  <FavouritesContext.Provider value={context}>
    {props.children}
  </FavouritesContext.Provider>;
}

export default FavouritesContext;
