import React from "react";
import { Layout } from "../components/Layout";
import TopVideoContainer from "../features/hot-videos/components/TopVideoContainer";

interface Props {}

export const Index: React.FC<Props> = () => {
  return (
    <Layout>
      <div className="container">
        <h4>Популярные</h4>
        <TopVideoContainer />
      </div>
    </Layout>
  );
};
