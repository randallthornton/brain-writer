"use client";

import { Button, IconButton, Toolbar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import MenuIcon from '@mui/icons-material/Menu';

export function NavMenu() {
  return (
    <AppBar position="static">
      <Toolbar className="flex justify-between bg-emerald-800">
        <IconButton className="text-inherit">
          <MenuIcon color="inherit" />
        </IconButton>

        <Button className="text-inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}
