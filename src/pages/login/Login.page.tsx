import {
  AppShell,
  Box,
  Button,
  Flex,
  Image,
  Stack,
  Text,
  TextInput,
  Title
} from "@mantine/core";
import { Helmet } from "react-helmet";
import classes from "./Login.module.css";

export function LoginPage() {
  return (
    <>
      <Helmet>
        <title>Login | Chatter</title>
      </Helmet>
      <AppShell className={classes.shell}>
        <Flex
          className={classes.column1}
          align="center"
          direction="column"
          flex={1}
          justify="center"
        >
          <Box>
            <Image height={80} src="/logo.png" alt="Logo image" />
          </Box>
          <Title>Chatter</Title>
          <Text size="xl">See what&apos;s happening</Text>
        </Flex>
        <Flex
          className={classes.column2}
          align="center"
          bg="burntOrange.2"
          flex={1}
          justify="center"
        >
          <Box maw={450} p="xl" w="100%">
            <Title order={3} mb="md">
              Log In
            </Title>
            <TextInput placeholder="Enter your display name" required />
            <Stack gap={8} mt="xl">
              <Button>Login with Google</Button>
              <Button>Login with Microsoft</Button>
              <Button>Login with Apple</Button>
              <Button>Login with GitHub</Button>
            </Stack>
          </Box>
        </Flex>
      </AppShell>
    </>
  );
}
