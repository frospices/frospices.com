import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

import Flex from "./Flex";
import Text from "./Text";
import Button from "./Button";
import Box from "./Box";
import IconButton from "./IconButton";
import Overlay from "./Overlay";

type Props = {
  href: string;
  label: string;
};

const NavLink = ({ href, label }: Props) => {
  const { asPath } = useRouter();

  return (
    <Link href={href} passHref>
      <Text
        fontWeight={asPath === href ? "bold" : "bold"}
        style={{
          cursor: "pointer",
        }}
      >
        {label}
      </Text>
    </Link>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Flex
      boxShadow="sm"
      px={["xl", "xxl"]}
      py="lg"
      alignItems="center"
      justifyContent="space-between"
      position="relative"
      height="60px"
    >
      <Link href="/" passHref>
        <Box as="img" alt="Frospices Logo" src="/logo.svg" height="35px" />
      </Link>
      <Box
        display={["none", "flex"]}
        justifyContent="space-between"
        alignItems="center"
        flex="1"
      >
        <Flex
          justifyContent="space-between"
          alignItems="center"
          mx="lg"
          mt="sm"
        >
          <Box mx="xs">
            <NavLink href="/#about" label="About us" />
          </Box>
          <Box mx="sm">
            <NavLink href="/#cook-with-us" label="Cook with us" />
          </Box>
        </Flex>
        <Flex flex="1" justifyContent="flex-end">
          <Link href="/contact" passHref>
            <Button variant="secondary" px="sm">
              <Text fontWeight="bold" fontSize="sm">
                Contact us
              </Text>
            </Button>
          </Link>
        </Flex>
      </Box>
      <Box display={["block", "none"]}>
        <IconButton onClick={handleClick}>
          <FaBars size="30px" />
        </IconButton>
      </Box>
      <Overlay isOpen={isMenuOpen} onClose={handleClick}>
        <Box p="sm" color="white">
          <NavLink href="/#about" label="About us" />
        </Box>
        <Box p="sm" color="white">
          <NavLink href="/#cook-with-us" label="Cook with us" />
        </Box>
        <Box p="sm">
          <Link href="/contact" passHref>
            <Button variant="secondary" px="sm">
              <Text fontWeight="bold">Contact us</Text>
            </Button>
          </Link>
        </Box>
      </Overlay>
    </Flex>
  );
};

export default Header;
