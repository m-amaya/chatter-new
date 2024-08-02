import { AppShell } from "@mantine/core";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <AppShell>
      <Outlet />
    </AppShell>
  );
}
