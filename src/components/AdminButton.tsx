/* eslint-disable no-extra-parens */
import { Box, Stack, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AdminButton(): JSX.Element {
    const [visible] = useState<boolean>(true);

    return (
        <div>
            {visible && (
                <Box
                    display={{ base: "none", md: "block" }}
                    mr={{ base: 0, md: 10 }}
                >
                    <Stack direction="row" spacing={5}>
                        <Link to="/admin">
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
                                Admin Page
                            </Button>
                        </Link>
                    </Stack>
                </Box>
            )}
        </div>
    );
}
