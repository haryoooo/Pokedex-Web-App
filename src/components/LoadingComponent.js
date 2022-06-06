import React, { Fragment } from "react";
import HomeNavComponent from "../components/HomeNavComponent";
import { ListGroup, Container } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const style = () => {
  return {
    marginBottom: 20,
  };
};

export default function LoadingComponent({ isDetail, isGoBack }) {
  return (
    <Fragment>
      {isDetail === 1 ? (
        <Container>
          <div onClick={isGoBack}>
            <HomeNavComponent />
          </div>
          <div className="DetailPokemon">
            <Skeleton style={{ marginTop: 50 }} height={500} width={700} />
            <div className="PokedexData">
              <ListGroup variant="flush">
                <h1 style={{ marginBottom: 30 }}>Pokedex Data</h1>
                <ListGroup.Item>
                  <div className="BaseStatsText">
                    Name
                    <div>
                      <Skeleton height={30} />
                    </div>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  Type{" "}
                  <div>
                    <Skeleton height={30} width={200} />
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  Height
                  <div>
                    <Skeleton height={30} width={200} />
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  Weight
                  <div>
                    <Skeleton height={30} width={200} />
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  National No
                  <div>
                    <Skeleton height={30} width={200} />
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </div>
        </Container>
      ) : (
        <Fragment>
          <Skeleton style={style()} height={20} width={200} />
          <Skeleton style={style()} height={100} />
          <Skeleton height={30} width={200} />
        </Fragment>
      )}
    </Fragment>
  );
}
