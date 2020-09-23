import React, { useState } from "react";
import {
  Box,
  Heading,
  Flex,
  Text,
  Button,
  Avatar,
  IconButton,
  useColorMode
} from "@chakra-ui/core";
import { NavLink } from "react-router-dom";
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

const Header = props => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  const [isLight, setIsLight] = useState(true);
  const toggleColor = () => setIsLight(!isLight);
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      color="#2D3748"
      marginLeft="auto"
      marginRight="auto"
      maxWidth="48rem"
      paddingTop="3rem"
      {...props}
    >
      <Flex
        align="center"
        mr={{ md: "5" }}
        width={{ base: "100%", md: "auto" }}
        justifyContent={{ base: "space-between", md: "flex-start" }}
      >
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          <Avatar
            name="Muhammad Ahmad"
            size="xl"
            src="https://avatars2.githubusercontent.com/u/37842853?v=4"
          />
        </Heading>

        <Box display={{ sm: "block", md: "none" }} onClick={handleToggle}>
          <svg
            fill="black"
            width="12px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          {/* <FiMenu /> */}
        </Box>
      </Flex>

      <Box
        display={{ base: show ? "block" : "none", md: "flex" }}
        width={{ base: "100%", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <MenuItems>
          <NavLink
            exact
            to="/"
            activeClassName="active"
            activeStyle={{ textDecoration: "underline" }}
          >
            About
          </NavLink>
        </MenuItems>
        <MenuItems>
          <NavLink
            exact
            to="/open-source"
            activeClassName="active"
            activeStyle={{ textDecoration: "underline" }}
          >
            Open Source
          </NavLink>
        </MenuItems>
        <MenuItems>
          <NavLink
            exact
            to="/blog"
            activeClassName="active"
            activeStyle={{ textDecoration: "underline" }}
          >
            Blog
          </NavLink>
        </MenuItems>
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <IconButton
          aria-label="Color Mode"
          icon={isLight ? <FiSun /> : <FaMoon />}
          color={isLight ? "gray.800" : "#fff"}
          background={isLight ? "#fff" : "gray.800"}
          onClick={toggleColorMode}
          size="lg"
          isRound={true}
          _hover={{ background: isLight ? "#E2E8F0" : "#718096" }}
        />
        {/* <Button bg="transparent" border="1px">
        </Button> */}
      </Box>
    </Flex>
  );
};

export default Header;