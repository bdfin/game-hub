import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColourModeSwitch from "./ColourModeSwitch";
import SearchInput from "./SearchInput";

export default function NavBar() {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="4rem" />
      <SearchInput />
      <ColourModeSwitch />
    </HStack>
  );
}
