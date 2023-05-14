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
                                Add Product Form
                            </Text>
                            <br></br>
                            <span>
                                <Text as="b" fontSize="2xl">
                                    Add to Mens List
                                </Text>
                                <AddMensProduct />
                                <br></br>
                                <Text as="b" fontSize="2xl">
                                    Add to Womens List
                                </Text>
                                <AddWomensProduct />
                            </span>
                        </div>
                        <br></br>
                        <div>
                            <Text as="b" fontSize="4xl">
                                Remove Product
                            </Text>
                            <br></br>
                            <span>
                                <Text as="b" fontSize="2xl">
                                    Mens
                                </Text>
                                <RemoveMensProduct />
                                <Text as="b" fontSize="2xl">
                                    Womens
                                </Text>
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
