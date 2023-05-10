import React from "react";
import { removeMProduct, removeWProduct } from "./ProductList";

const RemoveMensProduct = () => {
    return <div>{removeMProduct()}</div>;
};
export const RemoveWomensProduct = () => {
    return <div>{removeWProduct()}</div>;
};

export default RemoveMensProduct;
