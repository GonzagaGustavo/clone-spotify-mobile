import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import styled from "styled-components/native";

export default function App() {
  return (
    <Contaner>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </Contaner>
  );
}

const Contaner = styled.View`
  flex: 1;
  background-color: #191414;
  align-items: center;
  justify-content: center;
`;
