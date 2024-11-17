import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
export const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Función para abrir/cerrar el menú
  const toggleDrawer = (open: boolean) => () => {
    setIsOpen(open);
  };

  const menuItems = ["Inicio", "Servicios", "Acerca de", "Contacto"];
  return (
    <>
      <AppBar>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">AegisNet</Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
        <List>
          {menuItems.map((text, index) => (
            <ListItem
              key={index}
              onClick={toggleDrawer(false)}
              component={ListItemText}
            >
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};
