import { atom, selector } from "recoil";

type AuthStatus = "loggedOut" | "user" | "educator";

export const authState = atom<AuthStatus>({
  key: "authState",
  default: "loggedOut",
});

export const isLoggedInSelector = selector({
  key: "isLoggedInSelector",
  get: ({ get }) => {
    const status = get(authState);
    return status !== "loggedOut";
  },
});

export const userTypeSelector = selector({
  key: "userTypeSelector",
  get: ({ get }) => {
    const status = get(authState);
    return status;
  },
});
