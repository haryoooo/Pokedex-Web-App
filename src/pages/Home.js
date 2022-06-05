import React, { useEffect, useState } from "react";
import "./Home.css";
import MainpageDisplayComponent from "../components/MainpageDisplayComponent";
import HeaderComponent from "../components/HeaderComponent";
import SearchBarComponent from "../components/SearchBarComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemon } from "../store/action/pokemonAction";

export default function Home() {
  const dispatch = useDispatch();
  const { pokemon, isLoading } = useSelector((state) => state);
  const [filteredName, setFilteredName] = useState("");
  const [filteredPokemon, setFilteredPokemon] = useState("");

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
    <>
      {console.log(pokemon)}
      <HeaderComponent />
      <SearchBarComponent filterByName={filterByName} />
      <MainpageDisplayComponent
        pokemon={filteredName ? filteredPokemon : pokemon}
      />
    </>
  );
}
