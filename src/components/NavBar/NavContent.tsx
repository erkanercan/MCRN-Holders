import {
  Box,
  BoxProps,
  Center,
  HStack,
  Stack,
  StackDivider,
  StackProps,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import * as React from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { NavLink } from "./NavLink";
import { NavList } from "./NavList";
import { NavListItem } from "./NavListItem";

const links = [
  { label: "Showcase", href: "#" },
  { label: "Reviews", href: "#" },
  { label: "Features", href: "#" },
  { label: "Resources", href: "#" },
];

const MobileNavContent = (props: BoxProps) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box {...props} zIndex="999">
      <Center
        as="button"
        p="2"
        fontSize="2xl"
        color={useColorModeValue("gray.600", "gray.400")}
        onClick={onToggle}
      >
        {isOpen ? <HiX /> : <HiOutlineMenu />}
      </Center>
      <NavList
        pos="absolute"
        insetX="0"
        bg={useColorModeValue("gray.600", "gray.400")}
        top="64px"
        animate={isOpen ? "enter" : "exit"}
      >
        <Stack
          spacing="0"
          divider={<StackDivider borderColor="whiteAlpha.200" />}
        >
          {links.map((link, index) => (
            <NavListItem key={index}>
              <NavLink.Mobile href={link.href}>{link.label}</NavLink.Mobile>
            </NavListItem>
          ))}
          <NavListItem key="colorSwitcher">
            <NavLink.Mobile>
              <LanguageSwitcher />
            </NavLink.Mobile>
          </NavListItem>
          <NavListItem key="languageSwitcher">
            <NavLink.Mobile>
              <ColorModeSwitcher />
            </NavLink.Mobile>
          </NavListItem>
        </Stack>
      </NavList>
    </Box>
  );
};

const DesktopNavContent = (props: StackProps) => {
  return (
    <HStack spacing="4" align="stretch" {...props}>
      {links.map((link, index) => (
        <NavLink.Desktop key={index} href={link.href}>
          {link.label}
        </NavLink.Desktop>
      ))}
      <LanguageSwitcher />
      <ColorModeSwitcher />
    </HStack>
  );
};

export const NavContent = {
  Mobile: MobileNavContent,
  Desktop: DesktopNavContent,
};
