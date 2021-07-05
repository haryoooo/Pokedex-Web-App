import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import MainpageDisplayComponent from "../components/MainpageDisplayComponent";
import HeaderComponent from "../components/HeaderComponent";
import SearchBarComponent from "../components/SearchBarComponent"
import {url} from '../helpers/UrlConfig'

export default function Home() {
  const [detailPokemon, setDetailpokemon] = useState([]);
  const [filteredName, setFilteredName] = useState("")
  const [filteredPokemon, setFilteredPokemon] = useState("")


  function fetchPokemon() {
    axios
      .get(`${url}`)
      .then((res) => {
        let data = res.data;;
        data.results.map((element) => {
          getDataPokemon(element);
        });
      })

      .catch((err) => {
        console.log(err);
      });
  }

  function getDataPokemon(pokemon) {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
      .then((res) => {
        setDetailpokemon((currentList) => [...currentList, res.data]);
      })

      .catch((err) => {
        console.log(err);
      });
  }

  function filterByName(e){
    setFilteredName(e.target.value)
    filterPokemon(e.target.value)
  }

  function filterPokemon(text){
    let filtersPokemon = detailPokemon.filter(value=>{
      return value.name.toLowerCase().includes(text.toLowerCase())
    })

    setFilteredPokemon(filtersPokemon)
  }

  useEffect(() => {
    fetchPokemon();
  }, []);

    return (
      <>
        <HeaderComponent />
        <SearchBarComponent filterByName={filterByName} />
        <MainpageDisplayComponent 
          detailPokemon={filteredName ? filteredPokemon : detailPokemon}
        />
      </>
    );
  }
