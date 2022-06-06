import React from "react";
import CardComponent from "./CardComponent";
import LoadingComponent from "./LoadingComponent";
import EmptyPokemon from "../assets/pokemon-sad.png";
import "../styles/components/MainpageDisplayComponent.css";

export default function MainpageDisplayComponent(props) {
  return (
    <div className="MainpageDisplay">
      {props.isLoading ? (
        Array.apply(null, Array(5)).map(() => (
          <div className="isLoading">
            <LoadingComponent />
          </div>
        ))
      ) : props.filter !== "" && props.pokemon?.length === 0 ? (
        <div className="EmptyPokemon">
          <img src={EmptyPokemon} alt="empty-pokemon" />
          <h5>We're not found any pokemon related...</h5>
        </div>
      ) : (
        props?.pokemon?.map((value, idx) => {
          return (
            <CardComponent
              key={idx}
              type={value.type}
              name={value.name}
              id={value.id}
              sprites={value.sprites.front_default}
            />
          );
        })
      )}
    </div>
  );
}
