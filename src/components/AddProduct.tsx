import React, { useState } from "react";
import { addMProduct, addWProduct } from "./ProductList";
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    SimpleGrid
} from "@chakra-ui/react";

export const AddWomensProduct = () => {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [description, setDescription] = useState("");
    const [sizes, setSizes] = useState("");
    const [picture, setPicture] = useState("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const sizeList = sizes.split(","); // Split the sizes input by comma into an array

        // Call the addMProduct function with the user input values
        const message = addWProduct(
            name,
            category,
            parseInt(price),
            parseInt(stock),
            description,
            sizeList,
            picture
        );
        alert(message); // Display a success message to the user
    };

    return (
        <form onSubmit={handleSubmit}>
            <SimpleGrid columns={2} spacing={6}>
                <FormControl id="name" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </FormControl>
                <FormControl id="category" isRequired>
                    <FormLabel>Category</FormLabel>
                    <Input
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </FormControl>
                <FormControl id="price" isRequired>
                    <FormLabel>Price</FormLabel>
                    <Input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </FormControl>
                <FormControl id="stock" isRequired>
                    <FormLabel>Stock</FormLabel>
                    <Input
                        type="number"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                    />
                </FormControl>
                <FormControl id="description" isRequired>
                    <FormLabel>Description</FormLabel>
                    <Input
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </FormControl>
                <FormControl id="sizes" isRequired>
                    <FormLabel>Sizes (separate with commas)</FormLabel>
                    <Input
                        value={sizes}
                        onChange={(e) => setSizes(e.target.value)}
                    />
                </FormControl>
                <FormControl id="picture" isRequired>
                    <FormLabel>Picture</FormLabel>
                    <Input
                        value={picture}
                        onChange={(e) => setPicture(e.target.value)}
                    />
                </FormControl>
                <Button type="submit">Add Product</Button>
            </SimpleGrid>
        </form>
    );
};

const AddMensProduct = () => {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [description, setDescription] = useState("");
    const [sizes, setSizes] = useState("");
    const [picture, setPicture] = useState("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const sizeList = sizes.split(","); // Split the sizes input by comma into an array

        // Call the addMProduct function with the user input values
        const message = addMProduct(
            name,
            category,
            parseInt(price),
            parseInt(stock),
            description,
            sizeList,
            picture
        );
        alert(message); // Display a success message to the user
    };

    return (
        <form onSubmit={handleSubmit}>
            <SimpleGrid columns={2} spacing={6}>
                <FormControl id="name" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </FormControl>
                <FormControl id="category" isRequired>
                    <FormLabel>Category</FormLabel>
                    <Input
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </FormControl>
                <FormControl id="price" isRequired>
                    <FormLabel>Price</FormLabel>
                    <Input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </FormControl>
                <FormControl id="stock" isRequired>
                    <FormLabel>Stock</FormLabel>
                    <Input
                        type="number"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                    />
                </FormControl>
                <FormControl id="description" isRequired>
                    <FormLabel>Description</FormLabel>
                    <Input
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </FormControl>
                <FormControl id="sizes" isRequired>
                    <FormLabel>Sizes (separate with commas)</FormLabel>
                    <Input
                        value={sizes}
                        onChange={(e) => setSizes(e.target.value)}
                    />
                </FormControl>
                <FormControl id="picture" isRequired>
                    <FormLabel>Picture</FormLabel>
                    <Input
                        value={picture}
                        onChange={(e) => setPicture(e.target.value)}
                    />
                </FormControl>
                <Button type="submit">Add Product</Button>
            </SimpleGrid>
        </form>
    );
};

export default AddMensProduct;
