import React from "react";
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
    return (
        <div className="productImage">
            <img src={require(`../assets/${picture}.png`)} alt={description} />
            <h2 className="productName">{name}</h2>
            <p className="productDesc">{description}</p>
            <p className="productPrice">Price: ${price}</p>
            <ul>
                {sizes.map((size) => (
                    // eslint-disable-next-line react/jsx-key
                    <li className="productSize">{size}</li>
                ))}
            </ul>
        </div>
    );
};
// to display a single product --> <Product {...product1} />
export default Product;
