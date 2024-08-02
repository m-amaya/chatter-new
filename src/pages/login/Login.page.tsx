import { AppShell } from "@mantine/core";
import { Helmet } from "react-helmet";

export function LoginPage() {
  return (
    <>
      <Helmet>
        <title>Login | Chatter</title>
      </Helmet>
      <AppShell.Main>Login Page</AppShell.Main>
    </>
  );
}
