import React from "react";
import styled from "styled-components/native";
import FilterCard from "./card";

export default function Filters() {
  return (
    <Wrapper>
      <FilterCard title="Music" />
      <FilterCard title="Podcasts & Shows" />
    </Wrapper>
  );
}

const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  padding-left: 5px;
  padding-right: 5%;
  padding-bottom: 5%;
`;
