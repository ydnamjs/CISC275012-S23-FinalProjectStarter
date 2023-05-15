/* eslint-disable no-extra-parens */
import React, { useState, useEffect, useRef } from "react";
import NavBar from "../Navbar";
import {
    Button,
    Center,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    StackDivider,
    VStack,
    Container,
    AbsoluteCenter,
    Text,
    FormErrorMessage,
    useDisclosure,
    AlertDialog,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogBody
} from "@chakra-ui/react";
import { Link, Navigate } from "react-router-dom";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Login = () => {
    const userRef = React.useRef<HTMLInputElement>(null);

    const [user, setUser] = useState("");
    const [validName, setValidName] = useState(false);

    const [pwd, setPwd] = useState("");
    const [validPwd, setValidPwd] = useState(false);

    const [success, setSuccess] = useState(false);

    const [showPass, setShowPass] = React.useState(false);
    const handleClickPass = () => setShowPass(!showPass);

    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (userRef.current != null) {
            userRef.current.focus();
        }
    }, []);

    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
    }, [user]);

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        setValidPwd(result);
    }, [pwd]);

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            return;
        }
        localStorage.setItem("username", user);
        localStorage.setItem("password", pwd);
        setSuccess(true);
    };

    return (
        <>
            {success ? (
                <section>
                    <Navigate to="/" />
                </section>
            ) : (
                <section className="background">
                    <NavBar />
                    <br />
                    <Stack
                        direction="row"
                        spacing={5}
                        divider={<StackDivider borderColor="gray.200" />}
                    >
                        <Container>
                            <form onSubmit={handleSubmit}>
                                <VStack>
                                    <FormControl>
                                        <Center>
                                            <FormLabel
                                                htmlFor="username"
                                                fontSize="2xl"
                                            >
                                                Username:{" "}
                                            </FormLabel>
                                        </Center>
                                        <Input
                                            type="text"
                                            id="username"
                                            ref={userRef}
                                            autoComplete="off"
                                            onChange={(e) =>
                                                setUser(e.target.value)
                                            }
                                            required
                                            aria-invalid={
                                                validName ? "false" : "true"
                                            }
                                            aria-describedby="uidnote"
                                        />
                                        <Center>
                                            <FormLabel
                                                htmlFor="password"
                                                fontSize="2xl"
                                            >
                                                Password:{" "}
                                            </FormLabel>
                                        </Center>
                                        <InputGroup>
                                            <Input
                                                type={
                                                    showPass
                                                        ? "text"
                                                        : "password"
                                                }
                                                id="password"
                                                onChange={(e) =>
                                                    setPwd(e.target.value)
                                                }
                                                required
                                                aria-invalid={
                                                    validPwd ? "false" : "true"
                                                }
                                                aria-describedby="pwdnote"
                                            />
                                            <InputRightElement width="4.5rem">
                                                <Button
                                                    h="1.75rem"
                                                    size="sm"
                                                    onClick={handleClickPass}
                                                >
                                                    {showPass ? "Hide" : "Show"}
                                                </Button>
                                            </InputRightElement>
                                        </InputGroup>
                                        <FormErrorMessage />
                                    </FormControl>
                                    <Button
                                        disabled={
                                            !validName || !validPwd
                                                ? true
                                                : false
                                        }
                                        type="submit"
                                        onClick={onOpen}
                                    >
                                        Login
                                    </Button>
                                    <AlertDialog
                                        isOpen={isOpen}
                                        leastDestructiveRef={cancelRef}
                                        onClose={onClose}
                                    >
                                        <AlertDialogOverlay>
                                            <AlertDialogContent>
                                                <AlertDialogHeader
                                                    fontSize="xl"
                                                    fontWeight="bold"
                                                >
                                                    <Center>
                                                        Invalid Username or
                                                        Password
                                                    </Center>
                                                </AlertDialogHeader>
                                                <AlertDialogBody>
                                                    <Center>
                                                        <Button
                                                            ref={cancelRef}
                                                            onClick={onClose}
                                                            alignSelf="end"
                                                        >
                                                            Ok
                                                        </Button>
                                                    </Center>
                                                </AlertDialogBody>
                                            </AlertDialogContent>
                                        </AlertDialogOverlay>
                                    </AlertDialog>
                                </VStack>
                            </form>
                        </Container>
                        <Container width={75}>
                            <Center>
                                <AbsoluteCenter axis="vertical">
                                    <VStack>
                                        <Text as="b" fontSize="4xl">
                                            Not registered yet?
                                        </Text>
                                        <Link to="/register">
                                            <Button>Register</Button>
                                        </Link>
                                    </VStack>
                                </AbsoluteCenter>
                            </Center>
                        </Container>
                    </Stack>
                </section>
            )}
        </>
    );
};
export default Login;
