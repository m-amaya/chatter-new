import { AppShell } from "@mantine/core";
import { Helmet } from "react-helmet";

export function ExplorePage() {
  return (
    <>
      <Helmet>
        <title>Explore | Chatter</title>
      </Helmet>
      <AppShell.Main>Explore Page</AppShell.Main>
    </>
  );
}
