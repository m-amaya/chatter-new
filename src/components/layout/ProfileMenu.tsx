import {
  Avatar,
  Box,
  Menu,
  Text,
  UnstyledButton,
  useMantineTheme
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {
  HiOutlineLogout as LogoutIcon,
  HiOutlineUserCircle as ProfileIcon,
  HiOutlineSun as SunIcon
} from "react-icons/hi";
import classes from "./ProfileMenu.module.css";

export function ProfileMenu() {
  const theme = useMantineTheme();
  const isMediumBreakpoint = useMediaQuery(
    `(min-width: ${theme.breakpoints.md})`
  );

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
            <Avatar color="burntOrange.9" />
            <Box w={180}>
              <Text fw={900} lh={1.5} truncate="end">
                mamaya
              </Text>
              <Text c="dimmed" lh={1} truncate="end">
                mamaya.dev@gmail.com
              </Text>
            </Box>
          </UnstyledButton>
        ) : (
          <Avatar color="burntOrange.9" />
        )}
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item leftSection={<ProfileIcon size={20} />}>Profile</Menu.Item>
        <Menu.Item leftSection={<SunIcon size={20} />}>Light Mode</Menu.Item>
        <Menu.Item leftSection={<LogoutIcon size={20} />}>Log Out</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
