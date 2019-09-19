import React from "react";
import { Layout } from "../components/Layout";
import FoundVideoContainer from "../features/find-videos/components/FoundVideoContainer";

interface Props {}

export const FoundVideosPage: React.FC<Props> = () => {
  return (
    <Layout>
      <div className="container">
        <h4>Результат</h4>
        <FoundVideoContainer />
      </div>
    </Layout>
  );
};
