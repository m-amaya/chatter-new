import { AppShell, Center, Stack, useMatches } from "@mantine/core";
import { readLocalStorageValue } from "@mantine/hooks";
import { Logo } from "@src/components/layout/Logo";
import { NavTab } from "@src/components/layout/NavTab";
import { ProfileMenu } from "@src/components/layout/ProfileMenu";
import { User, useUserStore } from "@src/stores/user.store";
import { useEffect } from "react";
import {
  HiBookmark as BookmarkIcon,
  HiHome as HomeIcon,
  HiSearch as SearchIcon
} from "react-icons/hi";
import { Outlet, useNavigate } from "react-router-dom";
import classes from "./Layout.module.css";

export function Layout() {
  const navbarWidth = useMatches({
    base: 68,
    md: 300
  });
  const navigateTo = useNavigate();
  const user = readLocalStorageValue<User>({ key: "user" });
  const { uid, updateUser } = useUserStore();

  useEffect(() => {
    if (user?.uid !== uid) {
      updateUser(user);
    }

    if (!user?.uid) {
      navigateTo("/login", { replace: true });
    }
  }, [navigateTo, uid, updateUser, user]);

  return (
    <AppShell
      classNames={{ root: classes.shellRoot }}
      aside={{
        collapsed: { mobile: true },
        breakpoint: "sm",
        width: { base: "35%", xl: "45%" }
      }}
    >
      <AppShell.Navbar className={classes.navbar} w={navbarWidth}>
        <Stack gap={0}>
          <Logo />
          <NavTab to="/" Icon={HomeIcon}>
            Home
          </NavTab>
          <NavTab to="/explore" Icon={SearchIcon}>
            Explore
          </NavTab>
          <NavTab to="/bookmarks" Icon={BookmarkIcon}>
            Bookmarks
          </NavTab>
        </Stack>
        <Center p="lg">
          <ProfileMenu />
        </Center>
      </AppShell.Navbar>
      <AppShell.Main ml={navbarWidth}>
        <Outlet />
      </AppShell.Main>
      <AppShell.Aside p="md">Aside</AppShell.Aside>
    </AppShell>
  );
}
