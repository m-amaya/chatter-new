import { Center, Group, Image, Title } from "@mantine/core";
import classes from "./Logo.module.css";

export function Logo() {
  return (
    <Center className={classes.root} h={100}>
      <Group>
        <Image h={28} src="/logo.png" alt="Logo image" />
        <Title style={{ fontSize: 28 }} visibleFrom="md">
          Chatter
        </Title>
      </Group>
    </Center>
  );
}
