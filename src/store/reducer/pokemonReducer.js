import {
  LOAD_ALL_POKEMON,
  LOAD_DETAIL_POKEMON,
  LOADING_POKEMON,
} from "../action/actionType";

const initialState = {
  pokemon: [],
  pokemonDetail: [],
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ALL_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
      };

    case LOAD_DETAIL_POKEMON:
      return {
        pokemonDetail: state.pokemonDetail.concat(action.payload)
      };

    case LOADING_POKEMON:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
