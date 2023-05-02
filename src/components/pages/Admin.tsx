import React from "react";
import NavBar from "../Navbar";
import {
    Center,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text
} from "@chakra-ui/react";

const Admin = () => {
    return (
        <div className="background">
            <NavBar />
            <Tabs isFitted variant="enclosed">
                <TabList mb="1em">
                    <Tab>
                        <Text as="b" fontSize="lg">
                            Products
                        </Text>
                    </Tab>
                    <Tab>
                        <Text as="b" fontSize="lg">
                            Orders
                        </Text>
                    </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Center>
                            <Text as="b" fontSize="6xl">
                                Products
                            </Text>
                        </Center>
                    </TabPanel>
                    <TabPanel>
                        <Center>
                            <Text as="b" fontSize="6xl">
                                Orders
                            </Text>
                        </Center>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    );
};
export default Admin;
