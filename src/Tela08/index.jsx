import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  Box,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { AccountCircle, Logout, Person } from "@mui/icons-material";

export default function Tela08() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Gerenciador Pro
          </Typography>
          <IconButton
            size="large"
            egde="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setMenuIsOpen(true)}
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={menuIsOpen}
        onClose={() => setMenuIsOpen(false)}
      >
        <Box
          role="presentation"
          sx={{
            width: { xs: "180px", sm: "280px" },
            p: 4,
            textAlign: "center",
          }}
        >
          <AccountCircle />
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            Jean
          </Typography>

          <Divider sx={{ mt: 1, mb: 2 }} />

          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Person sx={{ mr: 2 }} />
                </ListItemIcon>
                <ListItemText primary="Meu Perfil" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Logout sx={{ mr: 2 }} sx={{ color: "error.main" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Sair da Conta"
                  sx={{ color: "error.main" }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
