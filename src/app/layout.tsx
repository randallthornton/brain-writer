import "~/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import { getServerAuthSession } from "~/server/auth";

import React from "react";
import MenuButton from "./_components/menu-button";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerAuthSession();

  return (
    <html lang="en">
      <body
        className={
          `font-sans ${inter.variable}` +
          " bg-gradient-to-b from-slate-800 to-emerald-950 text-white"
        }
      >
        <AppBar position="static">
          <Toolbar className="flex justify-between bg-emerald-800">
            <MenuButton></MenuButton>

            <Button
              className="text-inherit"
              href={session ? "/api/auth/signout" : "/api/auth/signin"}
            >
              {session ? <span>Sign out</span> : <span>Sign in</span>}
            </Button>
          </Toolbar>
        </AppBar>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
