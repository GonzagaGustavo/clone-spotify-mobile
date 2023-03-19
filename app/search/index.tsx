import { AntDesign } from "@expo/vector-icons";
import React from "react";
import styled from "styled-components/native";
import Layout from "../layout";
import theme from "../styles/theme";
import ExploreCard from "./exploreCard";
import HeaderSearch from "./header";

export default function Search() {
  return (
    <Layout>
      <PaddingX>
        <HeaderSearch />

        <ExploreWrapper>
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
        </ExploreWrapper>
      </PaddingX>
    </Layout>
  );
}

const ExploreWrapper = styled.View`
  padding-top: 30px;
  flex-direction: row;
  justify-content: space-between;
  gap: 8px;
  flex-wrap: wrap;
`;

const PaddingX = styled.View`
  padding: 0 10px;
`;
