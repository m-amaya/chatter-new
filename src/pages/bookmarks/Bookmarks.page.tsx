import { AppShell } from "@mantine/core";
import { Helmet } from "react-helmet";

export function BookmarksPage() {
  return (
    <>
      <Helmet>
        <title>Bookmarks | Chatter</title>
      </Helmet>
      <AppShell.Main>Bookmarks Page</AppShell.Main>
    </>
  );
}
