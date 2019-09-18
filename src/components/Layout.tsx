import React from "react";
import Header from "./Header";

interface Props {}

export const Layout: React.FC<Props> = props => {
  return (
    <React.Fragment>
      <Header />
      <main>{props.children}</main>
    </React.Fragment>
  );
};
