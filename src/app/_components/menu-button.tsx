"use client";

import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function NavButton() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton className="text-inherit" onClick={handleClick}>
        <MenuIcon color="inherit" />
      </IconButton>
      <Menu id="nav-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem component={Link} href="/" onClick={handleClose}>
          Home
        </MenuItem>
        <MenuItem component={Link} href="/sessions" onClick={handleClose}>
          Sessions
        </MenuItem>
      </Menu>
    </>
  );
}
