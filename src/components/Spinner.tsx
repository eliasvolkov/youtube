import React from "react";
import "../assets/styles/_spinner.scss";

interface Props {}

export const Spinner: React.FC<Props> = () => {
  return (
    <div className="lds-ring">
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};
