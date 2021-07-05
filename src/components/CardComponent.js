import React from "react";
import "./CardComponent.css";
import ButtonComponent from "./ButtonComponent";
import { useHistory } from "react-router-dom";

export default function CardComponent(props) {
  const history = useHistory()

  function goToDetails(id) {
    history.push(`/DetailPokemon/${id}`)
    window.location.reload();
  }

  return (
    <div className="Card">
      <h4 className="Capitalize">{props.name}</h4>
      <h5>{props.type}</h5>
      <img src={props.sprites} />
      <>
        <ButtonComponent goToDetails={()=>goToDetails(props.id)} />
      </>
    </div>
  );
}
