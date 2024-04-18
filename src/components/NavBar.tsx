import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColourModeSwitch from "./ColourModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="1rem">
      <Image src={logo} boxSize="4rem" />
      <ColourModeSwitch />
    </HStack>
  );
};

export default NavBar;
