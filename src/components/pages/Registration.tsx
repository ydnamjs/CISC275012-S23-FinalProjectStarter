/* eslint-disable no-extra-parens */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useRef } from "react";
import {
    Button,
    Center,
    FormControl,
    FormLabel,
    Input,
    VStack,
    Text,
    Stack,
    StackDivider,
    InputGroup,
    InputRightElement,
    Container,
    AbsoluteCenter,
    FormErrorMessage,
    AlertDialog,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogBody,
    useDisclosure
} from "@chakra-ui/react";
import { Navigate, Link } from "react-router-dom";
import Navbar from "../Navbar";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Registration = () => {
    const userRef = React.useRef<HTMLInputElement>(null);

    const [user, setUser] = useState("");
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState("");
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState("");
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [success, setSuccess] = useState(false);
    const [showPass, setShowPass] = React.useState(false);
    const handleClickPass = () => setShowPass(!showPass);
    const [showMatch, setShowMatch] = React.useState(false);
    const handleClickMatch = () => setShowMatch(!showMatch);

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
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd]);

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
                    <Navbar />
                    <br />
                    <Stack
                        direction="row"
                        spacing={5}
                        divider={<StackDivider borderColor="gray.200" />}
                    >
                        <Container>
                            <form onSubmit={handleSubmit}>
                                <VStack>
                                    <Center>
                                        <FormControl>
                                            <Center>
                                                <FormLabel
                                                    htmlFor="username"
                                                    fontSize="2xl"
                                                >
                                                    Username:{" "}
                                                    <span
                                                        className={
                                                            validName
                                                                ? "valid"
                                                                : "hide"
                                                        }
                                                    >
                                                        Valid
                                                    </span>
                                                    <span
                                                        className={
                                                            validName || !user
                                                                ? "hide"
                                                                : "invalid"
                                                        }
                                                    >
                                                        Invalid
                                                    </span>
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
                                                onFocus={() =>
                                                    setUserFocus(true)
                                                }
                                                onBlur={() =>
                                                    setUserFocus(false)
                                                }
                                                placeholder="Username"
                                                width={575}
                                            />
                                            <Center>
                                                <Text
                                                    id="uidnote"
                                                    className={
                                                        userFocus && !validName
                                                            ? "instructions"
                                                            : "hide"
                                                    }
                                                    align="center"
                                                >
                                                    4 to 24 characters.
                                                    <br />
                                                    Must begin with a letter.
                                                    <br />
                                                    Letters, numbers,
                                                    underscores, hyphens
                                                    allowed.
                                                </Text>
                                            </Center>
                                            <Center>
                                                <FormLabel
                                                    htmlFor="password"
                                                    fontSize="2xl"
                                                >
                                                    Password:{" "}
                                                    <span
                                                        className={
                                                            validPwd
                                                                ? "valid"
                                                                : "hide"
                                                        }
                                                    >
                                                        Valid
                                                    </span>
                                                    <span
                                                        className={
                                                            validPwd || !pwd
                                                                ? "hide"
                                                                : "invalid"
                                                        }
                                                    >
                                                        Invalid
                                                    </span>
                                                </FormLabel>
                                            </Center>
                                            <InputGroup width={575}>
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
                                                        validPwd
                                                            ? "false"
                                                            : "true"
                                                    }
                                                    aria-describedby="pwdnote"
                                                    onFocus={() =>
                                                        setPwdFocus(true)
                                                    }
                                                    onBlur={() =>
                                                        setPwdFocus(false)
                                                    }
                                                    placeholder="Password"
                                                />
                                                <InputRightElement width="4.5rem">
                                                    <Button
                                                        h="1.75rem"
                                                        size="sm"
                                                        onClick={
                                                            handleClickPass
                                                        }
                                                    >
                                                        {showPass
                                                            ? "Hide"
                                                            : "Show"}
                                                    </Button>
                                                </InputRightElement>
                                            </InputGroup>
                                            <Center>
                                                <Text
                                                    id="pwdnote"
                                                    className={
                                                        pwdFocus && !validPwd
                                                            ? "instructions"
                                                            : "hide"
                                                    }
                                                    align="center"
                                                >
                                                    8 to 24 characters.
                                                    <br />
                                                    Must include uppercase and
                                                    lowercase letters, a number
                                                    and a special character.
                                                    <br />
                                                    Allowed special characters:
                                                    !, @, #, $, %
                                                </Text>
                                            </Center>
                                            <Center>
                                                <FormLabel
                                                    htmlFor="confirm_pwd"
                                                    fontSize="2xl"
                                                >
                                                    Confirm Password:{" "}
                                                    <span
                                                        className={
                                                            validMatch &&
                                                            matchPwd
                                                                ? "valid"
                                                                : "hide"
                                                        }
                                                    >
                                                        Valid
                                                    </span>
                                                    <span
                                                        className={
                                                            validMatch ||
                                                            !matchPwd
                                                                ? "hide"
                                                                : "invalid"
                                                        }
                                                    >
                                                        Invalid
                                                    </span>
                                                </FormLabel>
                                            </Center>
                                            <InputGroup width={575}>
                                                <Input
                                                    type={
                                                        showMatch
                                                            ? "text"
                                                            : "password"
                                                    }
                                                    id="confirm_pwd"
                                                    onChange={(e) =>
                                                        setMatchPwd(
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                    aria-invalid={
                                                        validMatch
                                                            ? "false"
                                                            : "true"
                                                    }
                                                    aria-describedby="confirmnote"
                                                    onFocus={() =>
                                                        setMatchFocus(true)
                                                    }
                                                    onBlur={() =>
                                                        setMatchFocus(false)
                                                    }
                                                    placeholder="Confirm Password"
                                                />
                                                <InputRightElement width="4.5rem">
                                                    <Button
                                                        h="1.75rem"
                                                        size="sm"
                                                        onClick={
                                                            handleClickMatch
                                                        }
                                                    >
                                                        {showMatch
                                                            ? "Hide"
                                                            : "Show"}
                                                    </Button>
                                                </InputRightElement>
                                            </InputGroup>
                                            <Center>
                                                <Text
                                                    id="confirmnote"
                                                    className={
                                                        matchFocus &&
                                                        !validMatch
                                                            ? "instructions"
                                                            : "hide"
                                                    }
                                                    align="center"
                                                >
                                                    Must match the first
                                                    password.
                                                </Text>
                                            </Center>
                                            <FormErrorMessage />
                                        </FormControl>
                                    </Center>
                                    <Button
                                        disabled={
                                            !validName ||
                                            !validPwd ||
                                            !validMatch
                                                ? true
                                                : false
                                        }
                                        type="submit"
                                        onClick={onOpen}
                                    >
                                        Sign Up
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
                                            Already registered?
                                        </Text>
                                        <Link to="/login">
                                            <Button>Login</Button>
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
export default Registration;
