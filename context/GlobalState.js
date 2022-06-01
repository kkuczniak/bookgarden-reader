import { useReducer, createContext, useEffect } from 'react';
import AppReducer from './AppReducer';
import Cookies from 'js-cookie';

const initialState = {
  favorites: Cookies.get('favorites')
    ? JSON.parse(Cookies.get('favorites'))
    : [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    Cookies.set('favorites', JSON.stringify(state.favorites));
  }, [state]);

  const addBookToFavorites = (book) => {
    dispatch({ type: 'ADD_MOVIE_TO_FAVORITES', payload: book });
  };

  return (
    <GlobalContext.Provider
      value={{ favorites: state.favorites, addBookToFavorites }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
