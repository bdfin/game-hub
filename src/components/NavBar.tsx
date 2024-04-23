import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColourModeSwitch from "./ColourModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={logo} boxSize="4rem" objectFit="cover" />
      </Link>
      <SearchInput />
      <ColourModeSwitch />
    </HStack>
  );
}
