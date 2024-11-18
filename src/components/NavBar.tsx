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
import { AppRoutes } from "../types";
import { useNavigate } from "react-router-dom";
export const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const toggleDrawer = (open: boolean) => () => {
    setIsOpen(open);
  };

  const handleRoute = (open: boolean, path: string) => {
    setIsOpen(open);
    navigate(path);
  };

  const menuItems = [
    { title: "Dashboard", route: AppRoutes.Dashboard },
    { title: "Suplier Help Desk", route: AppRoutes.SupplierHelpDeskPage },
  ];
  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          margin: 0,
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4">AegisNet</Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              key={index}
              onClick={() => handleRoute(false, item.route)}
              component={ListItemText}
            >
              <ListItemText primary={item.title} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};
