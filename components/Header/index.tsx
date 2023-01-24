import { Box, Flex, Heading, IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { HiMenuAlt1 } from "react-icons/hi";

export default function Header() {
  const router = useRouter();

  return (
    <Flex
      h="16"
      w="full"
      transitionDuration="0.2"
      justifyContent="space-between"
      alignItems="center"
      px={{ sm: "6", md: "8", lg: "10", xl: "16" }}
    >
      <Menu>
        <MenuButton as={IconButton} variant="ghost" aria-label="Menu" icon={<HiMenuAlt1 size={24} />} />

        <MenuList bg="background-secundary">
          <MenuItem bg="background-secundary" _hover={{ textColor: "text-weak", bg: "background-primary" }}>
            Início
          </MenuItem>
        </MenuList>
      </Menu>

      {/* <Heading as="h2" fontSize="20px" fontWeight="semibold">
        Francisco Zhou
      </Heading> */}

      {/* <Box>
        <Menu isLazy>
          <MenuButton as={IconButton} variant="ghost" aria-label="Github" icon={<MdLanguage size="24" />}></MenuButton>

          <MenuList bg="background-secundary">
            {languages.map(({ lang, label }) => (
              <MenuItem
                key={lang}
                transitionDuration="200ms"
                bg="background-secundary"
                _hover={{ textColor: "text-weak", bg: "background-primary" }}
                onClick={() => changeLanguage(lang)}
              >
                {label}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box> */}
    </Flex>
  );
}
