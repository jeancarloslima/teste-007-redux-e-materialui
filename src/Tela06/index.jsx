import { Box, Grid, Paper, Typography } from "@mui/material";

export default function Tela06() {
  return (
    <Box sx={{ flexGrow: 1, p: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 4, minHeight: 300 }}>
            <Typography variant="h4" gutterBottom>
              Título do artigo
            </Typography>
            <Typography variant="body1">
              Este é o conteúdo principal. No celular, eu ocupo a tela toda. No
              computador, eu divido o espaço com a barra lateral, ficando com a
              maior parte da tela
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 4, bgcolor: "grey.50" }}>
            <Typography variant="h6" gutterBottom>
              Links úteis
            </Typography>
            <Typography variant="body2" color="primary">
              - Sobre o autor
              <br />
              - Artigos relacionados
              <br />- Assine a newsletter
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
