import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import Layout from "../layout";
import theme from "../styles/theme";
import { explore } from "./data";
import ExploreCard from "./exploreCard";
import HeaderSearch from "./header";

export default function Search() {
  return (
    <Layout>
      <PaddingX>
        <HeaderSearch />
        <ScrollView>
          <ExploreWrapper>
            {explore.map((exploreItem, index) => (
              <ExploreCard key={index} explore={exploreItem} />
            ))}
          </ExploreWrapper>
        </ScrollView>
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
