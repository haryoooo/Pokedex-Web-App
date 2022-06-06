import React, { Fragment } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const style = () => {
  return {
    marginBottom: 20,
  };
};

export default function LoadingComponent() {
  return (
    <Fragment>
      <Skeleton style={style()} height={20} width={200} />
      <Skeleton style={style()} height={100} />
      <Skeleton height={30} width={200} />
    </Fragment>
  );
}
