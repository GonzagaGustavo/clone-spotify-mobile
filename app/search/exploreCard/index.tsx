import theme from "@/app/styles/theme";
import React, { useState } from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import assets from "@/assets";

const windowSize: string = (Dimensions.get("window").width / 2).toFixed(0);

export default function ExploreCard() {
  const [pressed, setPressed] = useState<boolean>(false);

  return (
    <TouchableOpacity
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
    >
      <Wrapper pressed={pressed}>
        <Title>Podcasts</Title>
        <ImageWrapper>
          <Image source={assets.images.search[1]} />
        </ImageWrapper>
      </Wrapper>
    </TouchableOpacity>
  );
}

const Wrapper = styled.View<{ pressed: boolean }>`
  position: relative;
  background-color: #ff7b00;
  width: ${Number(windowSize) - 10 - 8}px;
  height: ${Number(windowSize) / 2}px;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 8px;
  transform: scale(${(p) => (p.pressed ? "0.95" : "1")});
  opacity: ${(p) => (p.pressed ? "0.9" : "1")};
`;

const Title = styled.Text`
  padding: 4%;
  color: ${theme.pallete.color};
  font-family: ${theme.pallete.fontFamily};
  font-size: 18px;
`;

const ImageWrapper = styled.View`
  position: absolute;
  aspect-ratio: 1 / 1;
  right: -8%;
  bottom: 0%;
  height: 66%;
`;
const Image = styled.Image`
  height: 100%;
  width: 100%;
  transform: rotate(25deg);
  border-radius: 8px;
`;
