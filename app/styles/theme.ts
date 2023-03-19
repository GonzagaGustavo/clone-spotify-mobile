export type Pallete = {
  background: string;
  main: string;
  color: string;
  fontFamily: string;
};

const pallete: Pallete = {
  background: "#000",
  main: "#191414",
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
