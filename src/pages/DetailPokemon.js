import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingComponent from "../components/LoadingComponent";
import HomeNavComponent from "../components/HomeNavComponent";
import { pokemonType } from "../helpers/pokemonTypeColor";
import { ProgressBar, ListGroup, Container } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { fetchDetailsPokemon } from "../store/action/pokemonAction";
import "../styles/pages/DetailPokemon.css";

export default function DetailPokemon() {
  const { id } = useParams();
  const { pokemonDetail, isLoading } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  function goToHomepage() {
    history.push("/");
  }

  useEffect(() => {
    dispatch(fetchDetailsPokemon(id));
  }, []);

  if (isLoading) {
    return <LoadingComponent isGoBack={goToHomepage} isDetail={1} />;
  }

  return (
    <Container>
      <div onClick={goToHomepage}>
        <HomeNavComponent />
      </div>
      {pokemonDetail.map((value) => {
        return (
          <div className="DetailPokemon">
            <img
              src={value.sprites.other["official-artwork"].front_default}
              alt="imgs"
            />
            <div className="PokedexData">
              <ListGroup variant="flush">
                <h1 style={{ marginBottom: 30 }}>Pokedex Data</h1>
                <ListGroup.Item>
                  <div className="BaseStatsText">
                    Name<h5 className="Capitalize">{value.name}</h5>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  Type{" "}
                  <h6 className="Type">
                    {value.types.map((values) => {
                      return (
                        <div
                          style={{
                            display: "inline",
                            border: 1,
                            borderStyle: "solid",
                            borderColor: "black",
                            marginRight: 10,
                            backgroundColor: pokemonType[values.type.name],
                            borderRadius: 10,
                            padding: 10,
                            width: 70,
                          }}
                        >
                          {values.type.name}
                        </div>
                      );
                    })}
                  </h6>
                </ListGroup.Item>
                <ListGroup.Item>
                  Height<h5>{value.height} m</h5>
                </ListGroup.Item>
                <ListGroup.Item>
                  Weight<h5>{value.weight} Kg</h5>
                </ListGroup.Item>
                <ListGroup.Item>
                  National No<h5>{value.order}</h5>
                </ListGroup.Item>
              </ListGroup>
            </div>

            <Container>
              <h3 style={{ paddingLeft: 20, marginBottom: 40 }}>
                Base Statistics
              </h3>
              {value.stats.map((el) => {
                return (
                  <div>
                    <ListGroup variant="flush">
                      <ListGroup.Item className="Capitalize">
                        <h6 style={{ marginBottom: 20 }}>{el.stat.name} : </h6>{" "}
                        <ProgressBar
                          variant="success"
                          now={el.base_stat}
                          label={`${el.base_stat}%`}
                        />
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                );
              })}
            </Container>

            <div>
              <h3
                style={{
                  marginLeft: 20,
                  marginTop: 50,
                  padding: 10,
                  width: "fit-content",
                }}
              >
                Moves
              </h3>
              <div className="Moves">
                {value.moves.map((el, idx) => {
                  return (
                    <ListGroup
                      style={{ margin: 10 }}
                      horizontal={"md"}
                      className="my-4"
                      key={idx}
                    >
                      <ListGroup.Item className="Capitalize">
                        {el.move.name}
                      </ListGroup.Item>
                    </ListGroup>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </Container>
  );
}
