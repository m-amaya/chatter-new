import { create } from "zustand";

export type User = {
  displayName: string;
  email: string;
  photoUrl: string;
  provider: "google" | "github";
  uid: string;
};

const defaultUser: User = {
  displayName: "",
  email: "",
  photoUrl: "",
  provider: "google",
  uid: ""
};

type Action = {
  logout: () => void;
  updateDisplayName: (displayName: User["displayName"]) => void;
  updateEmail: (email: User["email"]) => void;
  updatePhotoUrl: (url: User["photoUrl"]) => void;
  updateProvider: (url: User["provider"]) => void;
  updateUid: (uid: User["uid"]) => void;
};

export const useUserStore = create<User & Action>((set) => ({
  ...defaultUser,
  updateDisplayName: (displayName) => set(() => ({ displayName })),
  updateEmail: (email) => set(() => ({ email })),
  updatePhotoUrl: (url) => set(() => ({ photoUrl: url })),
  updateProvider: (provider: User["provider"]) => ({ provider }),
  updateUid: (uid) => set(() => ({ uid })),
  logout: () => set(defaultUser)
}));
