import theme from "@/app/styles/theme";
import React from "react";
import styled from "styled-components/native";

type Props = {
  title: string;
};

export default function FilterCard({ title }: Props) {
  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  );
}

const Wrapper = styled.View`
  align-items: center;
  padding: 1.5% 3.5%;
  border-radius: 25px;
  background-color: ${theme.pallete.main};
  margin-right: 2%;
`;

const Title = styled.Text`
  color: ${theme.pallete.color};
`;
