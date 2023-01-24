import React, { createContext, useState, useEffect, useCallback, useContext } from "react";

type ScrollPosition = number;

interface ScrollPositionContextProps {
  position: ScrollPosition;
}

const ScrollPositionContext = createContext<ScrollPositionContextProps>({
  position: 0,
});

interface ScrollPositionProviderProps {
  children: React.ReactNode;
}

const ScrollPositionProvider = ({ children }: ScrollPositionProviderProps) => {
  const [position, setPosition] = useState<ScrollPosition>(0);
  const handleScroll = useCallback(() => {
    setPosition(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return <ScrollPositionContext.Provider value={{ position }}>{children}</ScrollPositionContext.Provider>;
};

function useScrollPositionContext() {
  return useContext(ScrollPositionContext);
}

export { ScrollPositionProvider, useScrollPositionContext };
