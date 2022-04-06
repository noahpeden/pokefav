import { createContext, useReducer, useState } from 'react';

export const FavoritesContext = createContext();

const initialFavoriteState = [];

export const favoritesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [...state, action.payload];
    case 'reset':
      return initialFavoriteState;
    default:
      return state;
  }
};

const FavoritesContextProvider = ({ children }) => {
  const [searched, setSearched] = useState();
  const [favorites, dispatchFavorites] = useReducer(favoritesReducer, initialFavoriteState);
  return (
    <FavoritesContext.Provider value={{ favorites, dispatchFavorites, searched, setSearched }}>
      {children}
    </FavoritesContext.Provider>
  );
};
export default FavoritesContextProvider;
