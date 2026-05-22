import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";

export default function Tela05() {
  const [avaliacao, setAvaliacao] = useState("");

  const handleSumit = (e) => {
    e.preventDefault();
    console.log(avaliacao);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSumit}
      sx={{ maxWidth: "500px", p: 4, m: "0 auto" }}
    >
      <Stack spacing={3}>
        <TextField label="Assunto" variant="outlined" fullWidth required />

        <FormControl fullWidth required>
          <InputLabel id="avaliacao-label">Avaliação</InputLabel>
          <Select
            labelId="avaliacao-label"
            label="Avaliação"
            value={avaliacao}
            onChange={(e) => setAvaliacao(e.target.value)}
          >
            <MenuItem value="positiva">Positiva</MenuItem>
            <MenuItem value="negativa">Negativa</MenuItem>
            <MenuItem value="neutra">Neutra</MenuItem>
          </Select>
        </FormControl>

        <TextField label="Comentários" multiline rows={4} required />

        <FormControlLabel control={<Checkbox required />} label="Compreendo que meu nome e foto serão exibidos" />

        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Button type="reset" variant="outlined" color="error">
            Cancelar
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Enviar
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
