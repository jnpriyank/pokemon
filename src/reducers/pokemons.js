import * as listActionTypes from "../actions/pokemonsActionTypes";

const initialState = {
  fetching: false,
  fetched: false,
  data: [],
  error: null
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case listActionTypes.GetPokemons_Pending:
      return Object.assign({}, state, { ...action.payload });
    case listActionTypes.GetPokemons_Fulfilled:
      return Object.assign({}, state, { ...action.payload });
    case listActionTypes.GetPokemons_Rejected:
      return Object.assign({}, state, { ...action.payload });
    default:
      return state;
  }
};

export default listReducer;
