import React from "react";
import StockEditor from "./StockEditor";
import OrderViewer from "./OrderViewer";

function Admin(): JSX.Element {
    return (
        <>
            <div>
                <header>Orders</header>
                <OrderViewer />
            </div>
            <div>
                <header>Stock</header>
                <StockEditor />
            </div>
        </>
    );
}

export default Admin;
