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
import { useField } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { User, useUserStore } from "@src/stores/user.store";
import { auth, githubProvider, googleProvider } from "@src/tokens/firebaseApp";
import { signInWithPopup } from "firebase/auth";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import classes from "./Login.module.css";

export function LoginPage() {
  const displayNameField = useField({
    initialValue: "",
    validate: (value) =>
      value.trim().length < 4 ? "Name should be at least 4 characters." : null
  });
  const navigate = useNavigate();
  const store = useUserStore();

  const handleLogin = async (provider: User["provider"]) => {
    const error = await displayNameField.validate();
    const isGoogleProvider = provider === "google";

    if (error) {
      return;
    }

    try {
      const { user } = await signInWithPopup(
        auth,
        isGoogleProvider ? googleProvider : githubProvider
      );

      store.updateDisplayName(displayNameField.getValue());
      store.updateEmail(user.email ?? "");
      store.updatePhotoUrl(user.photoURL ?? "");
      store.updateProvider(provider);
      store.updateUid(user.uid);
    } catch (error) {
      notifications.show({
        title: "Login Error",
        message: `${error}`
      });
    }

    navigate("/");
  };

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
            <TextInput
              {...displayNameField.getInputProps()}
              placeholder="Enter your display name"
              required
            />
            <Stack gap={8} mt="xl">
              <Button onClick={() => handleLogin("google")}>
                Login with Google
              </Button>
              <Button onClick={() => handleLogin("github")}>
                Login with GitHub
              </Button>
              <Text size="sm">
                DISCLAIMER: This is a demo environment. No personal information
                is ever stored or shared with a third party.
              </Text>
            </Stack>
          </Box>
        </Flex>
      </AppShell>
    </>
  );
}
