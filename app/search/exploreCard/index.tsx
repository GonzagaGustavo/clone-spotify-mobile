import theme from "@/app/styles/theme";
import React from "react";
import { Dimensions, Image } from "react-native";
import styled from "styled-components/native";
import assets from "@/assets";

const windowSize: string = (Dimensions.get("window").width / 2).toFixed(0);

export default function ExploreCard() {
  return (
    <Wrapper>
      <Title>Podcasts</Title>
      <ImageWrapper>
        <Image
          source={assets.images.search[1]}
          style={{
            height: "100%",
            width: "100%",
            transform: [
              { rotate: "25deg" },
              { translateX: 18 },
              { translateY: -2 },
            ],
          }}
        />
      </ImageWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.View`
  position: relative;
  background-color: #ff7b00;
  width: ${windowSize}px;
  height: ${Number(windowSize) / 2}px;
`;

const Title = styled.Text`
  color: ${theme.pallete.color};
  font-family: ${theme.pallete.fontFamily};
`;

const ImageWrapper = styled.View`
  position: absolute;
  right: 0px;
  bottom: 0;
  width: 50%;
  height: 50%;
`;
