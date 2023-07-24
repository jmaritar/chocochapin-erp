import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

import { BiBook } from "react-icons/bi";

const Sidebar = () => {
  const sidebarItems = [
    { text: "Documentación", link: "/" },
    { text: "Inventario", link: "/inventory", icon: <BiBook /> },
    { text: "Clientes", link: "/clients" },
    { text: "Ventas", link: "/sales" },
    { text: "Gestión Financiera", link: "/finance" },
  ];

  return (
    <Box
      sx={{
        width: "240px",
        height: "100%",
        backgroundColor: "white",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "1",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          mt: "1rem",
          mb: "2rem",
          fontWeight: "bold",
        }}
      >
        Sidebar
      </Typography>
      <List sx={{ width: "100%" }}>
        {sidebarItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component="a" href={item.link}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
