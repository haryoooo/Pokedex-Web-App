import { LOAD_DETAIL_POKEMON, LOAD_ALL_POKEMON, LOADING_POKEMON } from "./actionType";
import axios from "axios";

export function loadingPokemon(data) {
  return {
    type: LOADING_POKEMON,
    payload: data,
  };
}

export function loadAllPokemon(data) {
  return {
    type: LOAD_ALL_POKEMON,
    payload: data,
  };
}

export function loadDetailPokemon(data) {
  return {
    type: LOAD_DETAIL_POKEMON,
    payload: data,
  };
}

export function fetchDetailsPokemon(id) {
  return (dispatch) => {
    dispatch(loadingPokemon(true))
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => {
        console.log(res.data)
        dispatch(loadDetailPokemon(res.data));
        dispatch(loadingPokemon(false))
      })

      .catch((err) => {
        console.log(err);
      });
  };
}
