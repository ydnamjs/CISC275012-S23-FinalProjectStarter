/* eslint-disable indent */
/* eslint-disable prettier/prettier */
/* eslint-disable no-extra-parens */
import React from "react";
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
    Image,
    AlertDialogFooter,
    AlertDialogBody,
    AlertDialogCloseButton,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialog,
    AlertDialogOverlay,
    useDisclosure
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Cart from "../assets/cart.png";
import { useRef } from "react";

function NavBar() {
    const { openCart, cartQuantity } = useShoppingCart();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef<HTMLButtonElement>(null);

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
                            <i className="title">E F F O R T L E S S </i>
                        </Text>
                    </Link>
                    <Box
                        display={{ base: "none", md: "block" }}
                        mr={{ base: 0, md: 10 }}
                    >
                        <Stack direction="row" spacing={5}>
                            <Link to="/shop">
                                <Button
                                    as="span"
                                    fontWeight="bold"
                                    color="black"
                                    variant="ghost"
                                    fontSize={{ base: "md", md: "lg" }}
                                    transition="background-color 0.3s ease"
                                    _hover={{
                                        bgGradient:
                                            "linear(to-b, gray.800, gray.300)",
                                        color: "black"
                                    }}
                                >
                                    Shop
                                </Button>
                            </Link>
                        </Stack>
                    </Box>
                </ButtonGroup>
                <ButtonGroup>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                            Roles
                        </MenuButton>
                        <MenuList>
                            <Link to="/">
                                <MenuItem
                                    onClick={() => {
                                        onOpen();
                                    }}
                                >
                                    User
                                </MenuItem>
                            </Link>
                            <AlertDialog
                                motionPreset="slideInBottom"
                                leastDestructiveRef={cancelRef}
                                onClose={onClose}
                                isOpen={isOpen}
                                isCentered
                            >
                                <AlertDialogOverlay />

                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        You are now in User Mode.
                                    </AlertDialogHeader>
                                    <AlertDialogCloseButton />
                                    <AlertDialogFooter>
                                        <Button
                                            ref={cancelRef}
                                            onClick={onClose}
                                        >
                                            Ok
                                        </Button>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                            <Link to="/admin">
                                <MenuItem
                                    onClick={() => {
                                        onOpen();
                                    }}
                                >
                                    Admin
                                </MenuItem>
                            </Link>
                            <AlertDialog
                                motionPreset="slideInBottom"
                                leastDestructiveRef={cancelRef}
                                onClose={onClose}
                                isOpen={isOpen}
                                isCentered
                            >
                                <AlertDialogOverlay />

                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        You are now in Admin Mode.
                                    </AlertDialogHeader>
                                    <AlertDialogBody>
                                        You now have Admin privileges.
                                    </AlertDialogBody>
                                    <AlertDialogCloseButton />
                                    <AlertDialogFooter>
                                        <Button
                                            ref={cancelRef}
                                            onClick={onClose}
                                        >
                                            Ok
                                        </Button>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </MenuList>
                    </Menu>
                    <Spacer />
                    <Stack direction="row" spacing={5}>
                        {localStorage.getItem("username") &&
                        localStorage.getItem("password") ? (
                            <Menu>
                                <MenuButton as={Button}>
                                    Hello {localStorage.getItem("username")}
                                </MenuButton>
                                <MenuList>
                                    <Link to="/logout">
                                        <MenuItem
                                            onClick={() => {
                                                onOpen();
                                            }}
                                        >
                                            Logout
                                        </MenuItem>
                                    </Link>
                                </MenuList>
                            </Menu>
                        ) : (
                            <Link to="/login">
                                <Button
                                    as="span"
                                    fontWeight="bold"
                                    color="black"
                                    variant="ghost"
                                    fontSize={{ base: "md", md: "lg" }}
                                    transition="background-color 0.3s ease"
                                    _hover={{
                                        bgGradient:
                                            "linear(to-b, gray.800, gray.300)",
                                        color: "black"
                                    }}
                                >
                                    Login
                                </Button>
                            </Link>
                        )}
                    </Stack>
                    <Spacer />
                    <Stack>
                        <Link to="/checkout">
                            <Button
                                as="span"
                                fontWeight="bold"
                                color="black"
                                variant="ghost"
                                fontSize={{ base: "md", md: "lg" }}
                                transition="background-color 0.3s ease"
                                _hover={{
                                    bgGradient:
                                        "linear(to-b, gray.800, gray.300)",
                                    color: "black"
                                }}
                            >
                                Checkout
                            </Button>
                        </Link>
                    </Stack>
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
