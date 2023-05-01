/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Spacer,
    Stack,
    Text,
    Image
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Cart from "../assets/cart.png";

function NavBar() {
    const [isAdmin, setPriv] = useState<boolean>(true);
    const { openCart, cartQuantity } = useShoppingCart();

    const navLinks = [
        { label: "Mens", path: "/men" },
        { label: "Womens", path: "/Women" }
    ];

    return (
        <Box
            as="nav"
            position="sticky"
            top={0}
            zIndex={99999999}
            py={2}
            bgGradient="linear(to-b, gray.900, gray.100)"
            boxShadow="md"
            padding={2}
        >
            <Flex
                justify="space-between"
                align="center"
                wrap="wrap"
                maxW={{ base: "100%", md: "100%" }}
                mx="auto"
            >
                <ButtonGroup>
                    <Link to="/">
                        <Text
                            as="span"
                            fontWeight="bold"
                            color="black"
                            fontSize={{ base: "xl", md: "2xl" }}
                            px={{ base: 4, md: 6 }}
                            py={{ base: 2, md: 3 }}
                        >
                            <i className="title">E F F O R T L E S S</i>
                        </Text>
                    </Link>
                    <Box
                        display={{ base: "none", md: "block" }}
                        mr={{ base: 0, md: 10 }}
                    >
                        <Stack direction="row" spacing={5}>
                            {navLinks.map((link) => (
                                <Link key={link.path} to={link.path}>
                                    <Button
                                        as="span"
                                        fontWeight="bold"
                                        color="black"
                                        variant="ghost"
                                        fontSize={{ base: "md", md: "lg" }}
                                        transition="background-color 0.3s ease"
                                        _hover={{
                                            bgGradient:
                                                "linear(to-b, gray.900, gray.300)",
                                            color: "black"
                                        }}
                                    >
                                        {link.label}
                                    </Button>
                                </Link>
                            ))}
                        </Stack>
                    </Box>
                </ButtonGroup>
                <ButtonGroup>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                            {!isAdmin ? "Admin" : "User"}
                        </MenuButton>
                        <MenuList>
                            <MenuItem
                                onClick={() => {
                                    alert("Now in User Mode");
                                    setPriv(true);
                                }}
                            >
                                User
                            </MenuItem>
                            <MenuItem
                                onClick={() => {
                                    alert("Now in Admin Mode");
                                    setPriv(false);
                                }}
                            >
                                Admin
                            </MenuItem>
                        </MenuList>
                    </Menu>
                    <Spacer />
                    <Stack spacing={3}>
                        <Button onClick={openCart}>
                            <Image
                                src={Cart}
                                boxSize={5}
                                alt="Shopping Cart"
                                objectFit="cover"
                            ></Image>
                            <div
                                className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                                style={{
                                    color: "white",
                                    width: "1.5rem",
                                    height: "1.5rem",
                                    position: "absolute",
                                    bottom: 0,
                                    right: 0,
                                    transform: "translate(25%, 25%)"
                                }}
                            >
                                {cartQuantity}
                            </div>
                        </Button>
                    </Stack>
                    <Spacer />
                </ButtonGroup>
            </Flex>
        </Box>
    );
}

export default NavBar;
