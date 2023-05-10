import React from "react";
import NavBar from "../Navbar";
import "../RemoveProduct";
import {
    Center,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text
} from "@chakra-ui/react";
import RemoveMensProduct, { RemoveWomensProduct } from "../RemoveProduct";
import AddMensProduct, { AddWomensProduct } from "../AddProduct";

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
                        <div>
                            <Text as="b" fontSize="4xl">
                                add Product Form
                            </Text>
                            <span>
                                <h1>Add to mens List</h1>
                                <AddMensProduct />
                                <h1>Add to womens List</h1>
                                <AddWomensProduct />
                            </span>
                        </div>
                        <div>
                            <Text as="b" fontSize="4xl">
                                Remove Product
                            </Text>
                            <span>
                                <h1>mens</h1>
                                <RemoveMensProduct />
                                <h2>womens</h2>
                                <RemoveWomensProduct />
                            </span>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <Center>
                            <div>
                                <Text as="b" fontSize="6xl">
                                    Orders
                                </Text>
                            </div>
                        </Center>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    );
};
export default Admin;
