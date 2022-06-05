import {
  LOAD_DETAIL_POKEMON,
  LOAD_ALL_POKEMON,
  LOADING_POKEMON,
} from "./actionType";
import { url } from "../../helpers/UrlConfig";
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

export function fetchPokemon() {
  return (dispatch) => {
    dispatch(loadingPokemon(true));
    axios
      .get(`${url}`)
      .then((res) => {
        Promise.all(res.data.results.map((val) => fetch(val.url)))
          .then((response) => Promise.all(response.map((ress) => ress.json())))
          .then((json) => dispatch(loadAllPokemon(json)));
        dispatch(loadingPokemon(false));
      })

      .catch((err) => {
        console.log(err);
      });
  };
}

export function fetchDetailsPokemon(id) {
  return (dispatch) => {
    dispatch(loadingPokemon(true));
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => {
        dispatch(loadingPokemon(false));
        dispatch(loadDetailPokemon(res.data));
      })

      .catch((err) => {
        console.log(err);
      });
  };
}
