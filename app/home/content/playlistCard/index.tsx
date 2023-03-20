import theme from "@/app/styles/theme";
import images from "@/assets/images";
import React, { useState } from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const width: string = (Dimensions.get("window").width / 2).toFixed(0);
const widthPorcentage = (porcentage: number) => {
  return (Number(width) / 100) * porcentage;
};

export default function PlaylistCard() {
  const [pressed, setPressed] = useState<boolean>(false);

  return (
    <TouchableOpacity
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
    >
      <Wrapper pressed={pressed}>
        <Image source={images.content.dailymix[3]} />
        <TextWrapper>
          <Text>A Text</Text>
        </TextWrapper>
      </Wrapper>
    </TouchableOpacity>
  );
}

const Wrapper = styled.View<{ pressed: boolean }>`
  width: ${Number(width) - widthPorcentage(8) - 10}px;
  margin-right: 10px;
  height: ${Number(width) - widthPorcentage(8) - 10 + 30}px;

  transform: scale(${(p) => (p.pressed ? "0.95" : "1")});
  opacity: ${(p) => (p.pressed ? "0.9" : "1")};
`;
const Image = styled.Image`
  width: 100%;
  height: ${Number(width) - widthPorcentage(8) - 10}px;
  margin-bottom: 10px;
`;

const TextWrapper = styled.View`
  height: 30px;
`;
const Text = styled.Text`
  font-family: ${theme.pallete.fontFamily};
  color: ${theme.pallete.main};
`;
