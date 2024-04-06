import { Button, IconButton, Toolbar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import { Session } from "next-auth";

export async function NavMenu({ session }: { session: Session | null }) {
  return (
    <AppBar position="static">
      <Toolbar className="flex justify-between bg-emerald-800">
        <IconButton className="text-inherit">
          <MenuIcon color="inherit" />
        </IconButton>

        <Button
          className="text-inherit"
          href={session ? "/api/auth/signout" : "/api/auth/signin"}
        >
          {session ? <span>Sign out</span> : <span>Sign in</span>}
        </Button>
      </Toolbar>
    </AppBar>
  );
}
