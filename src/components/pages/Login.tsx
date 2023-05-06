import React from "react";
import NavBar from "../Navbar";
import { Center, Text } from "@chakra-ui/react";

const Login = () => {
    return (
        <div className="background">
            <NavBar />
            <Center>
                <Text as="b" fontSize="6xl">
                    Login
                </Text>
            </Center>
        </div>
    );
};
export default Login;
