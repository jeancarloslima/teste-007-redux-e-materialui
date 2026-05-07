import { Button, Box } from "@mui/material";

export default function Tela02() {
  return (
    <Box sx={{ p: 4, border: "1px solid gray", borderRadius: 2 }}>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "primary.main",
          textTransform: "none",
          "&:hover": { backgroundColor: "primary.dark" },
        }}
      >
        Salvar Dados
      </Button>
    </Box>
  );
}
