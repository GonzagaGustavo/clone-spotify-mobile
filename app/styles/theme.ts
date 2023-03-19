export type Pallete = {
  background: string;
  main: string;
  color: string;
  fontFamily: string;
};

const pallete: Pallete = {
  background: "#000",
  main: "rgba(51, 51, 51, 0.7)",
  color: "#fff",
  fontFamily: "CircularStd-Black",
};

export type Theme = {
  pallete: Pallete;
};

const theme = {
  pallete,
};

export default theme;
