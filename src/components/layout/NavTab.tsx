import { Text, Tooltip, UnstyledButton, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { HTMLAttributeAnchorTarget } from "react";
import { IconType } from "react-icons";
import { NavLink } from "react-router-dom";
import classes from "./NavTab.module.css";

type NavTabProps = {
  children: string;
  target?: HTMLAttributeAnchorTarget;
  to: string;
  Icon?: IconType;
};

export function NavTab({ children, target, to, Icon }: NavTabProps) {
  const theme = useMantineTheme();
  const isMediumBreakpoint = useMediaQuery(
    `(min-width: ${theme.breakpoints.md})`
  );

  return (
    <Tooltip disabled={isMediumBreakpoint} label={children} position="right">
      <NavLink className={classes.link} to={to} target={target}>
        <UnstyledButton className={classes.button} p="lg">
          {Icon && <Icon size={20} style={{ marginTop: -2 }} />}
          <Text size="lg" fw={600} visibleFrom="md">
            {children}
          </Text>
        </UnstyledButton>
      </NavLink>
    </Tooltip>
  );
}
