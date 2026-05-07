import { createTheme, ThemeProvider } from "@mui/material/styles";
import Tela02 from "../Tela02";

const meuTema = createTheme({
  palette: {
    primary: {
      main: "#1e293b",
    },
    secondary: {
      main: "#3b82f6",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    button: {
      fontWeight: 700,
    },
  },
});

export default function Tela03() {
  return (
    <ThemeProvider theme={meuTema}>
      <Tela02 />
    </ThemeProvider>
  );
}
