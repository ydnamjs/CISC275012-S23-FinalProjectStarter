/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import "./Product.css";
import "./Main.css";

interface ProductProps {
    name: string;
    price: number;
    description: string;
    sizes: string[];
    picture: string;
}

const Product: React.FC<ProductProps> = ({
    name,
    price,
    description,
    sizes,
    picture
}) => {
    const [selectedSize, setSelectedSize] = useState("");

    const handleSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedSize(event.target.value);
    };

    const handleAddToCart = () => {
        // Implement your "Add to Cart" logic here
        console.log(`Added ${name} (size ${selectedSize}) to cart`);
    };
    return (
        <div className="productImage">
            <img src={require(`../assets/${picture}.png`)} alt={description} />
            <h2 className="productName">{name}</h2>
            <p className="productDesc">{description}</p>
            <p className="productPrice">Price: ${price}</p>
            <div className="productSize">
                <label className="productSize">Size:</label>
                <select
                    id="sizeSelect"
                    value={selectedSize}
                    onChange={handleSizeChange}
                >
                    <option value="">--Please select a size--</option>
                    {sizes.map((size) => (
                        <option key={size} value={size}>
                            {size}
                        </option>
                    ))}
                </select>
            </div>
            <button className="productButton" onClick={handleAddToCart}>
                Add to Cart
            </button>
        </div>
    );
};
// to display a single product --> <Product {...product1} />
export default Product;
