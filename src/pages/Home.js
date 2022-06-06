import React, { useEffect, useState, Fragment } from "react";
import MainpageDisplayComponent from "../components/MainpageDisplayComponent";
import HeaderComponent from "../components/HeaderComponent";
import SearchBarComponent from "../components/SearchBarComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemon } from "../store/action/pokemonAction";
import "../styles/pages/Home.css";

export default function Home() {
  const { pokemon, isLoading } = useSelector((state) => state);
  const [filteredName, setFilteredName] = useState("");
  const [filteredPokemon, setFilteredPokemon] = useState("");
  const dispatch = useDispatch();

  function filterByName(e) {
    setFilteredName(e.target.value);
    filterPokemon(e.target.value);
  }

  function filterPokemon(text) {
    let filtersPokemon = pokemon.filter((value) => {
      return value.name.toLowerCase().includes(text.toLowerCase());
    });

    setFilteredPokemon(filtersPokemon);
  }

  useEffect(() => {
    dispatch(fetchPokemon());
  }, []);

  return (
    <Fragment>
      <HeaderComponent />
      <SearchBarComponent filterByName={filterByName} />
      <MainpageDisplayComponent
        filter={filteredName}
        pokemon={filteredName ? filteredPokemon : pokemon}
        isLoading={isLoading}
      />
    </Fragment>
  );
}
