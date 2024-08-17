import { useLocalStorage } from "@mantine/hooks";
import { defaultUser } from "@src/stores/user.store";

export function useUser() {
  return useLocalStorage({
    key: "user",
    defaultValue: defaultUser
  });
}
