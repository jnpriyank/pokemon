import * as actionTypes from "./pokemonsActionTypes";

export const getPokemons = () => {
  return (dispatch) => {
    dispatch(getPokemonsPending());
    return fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(getPokemonsFulfilled(data));
      })
      .catch((error) => getPokemonsRejected(error));
  };
};

export const getPokemonsPending = () => {
  return {
    type: actionTypes.GetPokemons_Pending,
    payload: {
      fetching: true,
      fetched: false
    }
  };
};

export const getPokemonsFulfilled = (data) => {
  return {
    type: actionTypes.GetPokemons_Fulfilled,
    payload: {
      fetching: false,
      fetched: true,
      data,
      error: null
    }
  };
};

export const getPokemonsRejected = (error) => {
  return {
    type: actionTypes.GetPokemons_Rejected,
    payload: {
      fetching: false,
      fetched: true,
      data: [],
      error
    }
  };
};
