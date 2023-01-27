import { Box, Flex, Heading, IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MutableRefObject, useCallback } from "react";
import { animateScroll as scroll } from "react-scroll";

import { HiMenuAlt1 } from "react-icons/hi";

interface HeaderProps {
  sections: {
    section: string;
    label: string;
    ref: MutableRefObject<HTMLDivElement | null>;
  }[];
}

export default function Header(props: HeaderProps) {
  const scrollTo = useCallback((ref: MutableRefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <Flex
      h="16"
      w="full"
      position="fixed"
      zIndex="100"
      transitionDuration="0.2"
      justifyContent="space-between"
      alignItems="center"
      px={{ sm: "6", md: "8", lg: "10", xl: "16" }}
    >
      <Menu>
        <MenuButton as={IconButton} variant="ghost" aria-label="Menu" icon={<HiMenuAlt1 size={24} />} />

        <MenuList bg="background-secundary">
          {props.sections.map(({ label, ref }) => (
            <MenuItem
              key={Math.random()}
              bg="background-secundary"
              _hover={{ textColor: "text-weak", bg: "background-primary" }}
              onClick={() => {
                ref.current?.scrollIntoView({});
              }}
            >
              {label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Flex>
  );
}
