import {
  Box,
  Button,
  createTheme,
  CssBaseline,
  TextField,
  ThemeProvider,
} from "@mui/material";

const meuTema = createTheme({
  palette: {
    primary: {
      main: "#6200ea",
      light: "#b085f5",
      dark: "#4a00b0",
    },
    secondary: {
      main: "#00bfa5",
    },
  },
  typography: {
    fontFamily: '"Nunito", "Helvetica", "Arial", sans-serif',
  },
  shape: {
    borderRadius: 0,
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#42fa42",
    },
    secondary: {
      main: "#83d683",
    },
    background: {
      default: "#575757",
    },
  },
  shape: {
    borderRadius: 0,
  },
});

export default function Tela07() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <Box
        sx={{
          p: 4,
          display: "flex",
          gap: 2,
          flexDirection: "column",
          maxWidth: 300,
          margin: "0 auto",
        }}
      >
        <Button variant="contained" color="primary" size="large">
          Botão primário
        </Button>

        <Button variant="outlined" color="secondary">
          Botão secundário
        </Button>

        <TextField label="Input com estilo do tema" variant="outlined" />
      </Box>
    </ThemeProvider>
  );
}
