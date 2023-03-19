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
      <HeaderSearch />

      <ExploreCard />
    </Layout>
  );
}
