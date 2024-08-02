import { AppShell } from "@mantine/core";
import { Helmet } from "react-helmet";

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home | Chatter</title>
      </Helmet>
      <AppShell.Main>Home Page</AppShell.Main>
    </>
  );
}
