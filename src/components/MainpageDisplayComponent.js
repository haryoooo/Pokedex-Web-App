import React from 'react'
import CardComponent from './CardComponent';
import './MainpageDisplayComponent.css'

export default function MainpageDisplayComponent(props) {
    return (
        <div className="MainpageDisplay">
            {props.detailPokemon.map((value, idx) => {
            return (
              <CardComponent
                key={idx}
                type={value.type}
                name={value.name}
                id={value.id}
                sprites={value.sprites.front_default}
              />
            );
          })}
        </div>
    )
}
