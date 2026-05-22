import { Box, Button, Stack, Typography } from "@mui/material";

export default function Tela04() {
  return (
    <Box
      sx={{
        maxWidth: "400px",
        p: 4,
        borderRadius: 2,
        bgcolor: "grey.50",
        m: "0 auto",
      }}
    >
      <Stack spacing={2}>
        <Typography
          variant="caption"
          sx={{
            p: "8px",
            borderRadius: "4px",
            textTransform: "uppercase",
          }}
        >
          Cinema
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          50 fatos interessantes sobre filmes famosos
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Descubra 50 fatos interessantes sobre filmes muito famosos.
        </Typography>
        <Box sx={{ pt: 2, textAlign: "right" }}>
          <Button variant="outlined">
            Ler artigo
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
