import { createContext, useContext, type ReactNode } from "react";

type SplashContextValue = {
  splashDone: boolean;
};

const SplashContext = createContext<SplashContextValue>({ splashDone: false });

export function SplashProvider({
  splashDone,
  children,
}: {
  splashDone: boolean;
  children: ReactNode;
}) {
  return (
    <SplashContext.Provider value={{ splashDone }}>{children}</SplashContext.Provider>
  );
}

export function useSplashDone() {
  return useContext(SplashContext).splashDone;
}
