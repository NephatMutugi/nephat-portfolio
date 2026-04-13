import { createContext, useContext, type ReactNode } from "react";
import { useIsMobile } from "../hooks/useIsMobile";

const MobileContext = createContext<boolean>(false);

export function MobileProvider({ children }: { children: ReactNode }) {
  const isMobile = useIsMobile();
  return (
    <MobileContext.Provider value={isMobile}>
      {children}
    </MobileContext.Provider>
  );
}

export function useMobile(): boolean {
  return useContext(MobileContext);
}
