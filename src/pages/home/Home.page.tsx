import { Stack } from "@mantine/core";
import { WritePost } from "@src/pages/home/WritePost";
import { Helmet } from "react-helmet";

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home | Chatter</title>
      </Helmet>
      <Stack>
        <WritePost />
      </Stack>
    </>
  );
}
