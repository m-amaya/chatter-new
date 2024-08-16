import {
  Avatar,
  Box,
  Menu,
  Text,
  UnstyledButton,
  useComputedColorScheme,
  useMantineColorScheme,
  useMantineTheme
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useUserStore } from "@src/stores/user.store";
import {
  HiOutlineLogout as LogoutIcon,
  HiOutlineMoon as MoonIcon,
  HiOutlineUserCircle as ProfileIcon,
  HiOutlineSun as SunIcon
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import classes from "./ProfileMenu.module.css";

export function ProfileMenu() {
  const colorScheme = useComputedColorScheme();
  const { toggleColorScheme } = useMantineColorScheme({
    keepTransitions: true
  });
  const theme = useMantineTheme();
  const isMediumBreakpoint = useMediaQuery(
    `(min-width: ${theme.breakpoints.md})`
  );
  const navigateTo = useNavigate();
  const { displayName, email, logout, photoUrl } = useUserStore();
  const isLightTheme = colorScheme === "light";

  return (
    <Menu
      classNames={{
        item: classes.item
      }}
      trigger="click-hover"
      position="right-end"
      transitionProps={{ transition: "fade-right" }}
      width={200}
    >
      <Menu.Target>
        {isMediumBreakpoint ? (
          <UnstyledButton className={classes.button}>
            <Avatar color="burntOrange.9" src={photoUrl} />
            <Box w={180}>
              <Text fw={900} lh={1.5} truncate="end">
                {displayName}
              </Text>
              <Text c="dimmed" lh={1} truncate="end">
                {email}
              </Text>
            </Box>
          </UnstyledButton>
        ) : (
          <Avatar color="burntOrange.9" />
        )}
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          leftSection={<ProfileIcon size={20} />}
          onClick={() => navigateTo("/profile")}
        >
          Profile
        </Menu.Item>
        <Menu.Item
          leftSection={
            isLightTheme ? <MoonIcon size={20} /> : <SunIcon size={20} />
          }
          onClick={toggleColorScheme}
        >
          {isLightTheme ? "Dark" : "Light"} Mode
        </Menu.Item>
        <Menu.Item
          leftSection={<LogoutIcon size={20} />}
          onClick={() => logout()}
        >
          Log Out
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
