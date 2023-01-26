import React, { createContext, useState, useEffect, useCallback, useContext } from "react";

type ScrollPosition = number;

interface ScrollPositionContextProps {
  positionY: ScrollPosition;
}

const ScrollPositionContext = createContext<ScrollPositionContextProps>({
  positionY: 0,
});

interface ScrollPositionProviderProps {
  children: React.ReactNode;
}

const ScrollPositionProvider = ({ children }: ScrollPositionProviderProps) => {
  const [positionY, setPositionY] = useState<ScrollPosition>(0);

  const handleScroll = useCallback(() => {
    setPositionY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return <ScrollPositionContext.Provider value={{ positionY }}>{children}</ScrollPositionContext.Provider>;
};

function useScrollPositionContext() {
  return useContext(ScrollPositionContext);
}

export { ScrollPositionProvider, useScrollPositionContext };
