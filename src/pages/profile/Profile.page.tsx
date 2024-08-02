import { AppShell } from "@mantine/core";
import { Helmet } from "react-helmet";

export function ProfilePage() {
  return (
    <>
      <Helmet>
        <title>Profile | Chatter</title>
      </Helmet>
      <AppShell.Main>Profile Page</AppShell.Main>
    </>
  );
}
