import React, { Dispatch, SetStateAction } from "react";
import CartDisplay from "./CartDisplay";

function cartEditor({
    shirtCart1,
    setShirtCart1,
    shirtCart2,
    setShirtCart2,
    shirtCart3,
    setShirtCart3,
    shirtCart4,
    setShirtCart4,
    shirtCart5,
    setShirtCart5,
    shirtCart6,
    setShirtCart6,
    sweatCart1,
    sweatSetCart1,
    sweatCart2,
    sweatSetCart2,
    sweatCart3,
    sweatSetCart3,
    sweatCart4,
    sweatSetCart4,
    sweatCart5,
    sweatSetCart5,
    sweatCart6,
    sweatSetCart6,
    stock1,
    setStock1,
    stock2,
    setStock2,
    stock3,
    setStock3,
    stock4,
    setStock4,
    stock5,
    setStock5,
    stock6,
    setStock6,
    sweatStock1,
    sweatSetStock1,
    sweatStock2,
    sweatSetStock2,
    sweatStock3,
    sweatSetStock3,
    sweatStock4,
    sweatSetStock4,
    sweatStock5,
    sweatSetStock5,
    sweatStock6,
    sweatSetStock6
}: {
    shirtCart1: number;
    setShirtCart1: Dispatch<SetStateAction<number>>;
    shirtCart2: number;
    setShirtCart2: Dispatch<SetStateAction<number>>;
    shirtCart3: number;
    setShirtCart3: Dispatch<SetStateAction<number>>;
    shirtCart4: number;
    setShirtCart4: Dispatch<SetStateAction<number>>;
    shirtCart5: number;
    setShirtCart5: Dispatch<SetStateAction<number>>;
    shirtCart6: number;
    setShirtCart6: Dispatch<SetStateAction<number>>;
    sweatCart1: number;
    sweatSetCart1: Dispatch<SetStateAction<number>>;
    sweatCart2: number;
    sweatSetCart2: Dispatch<SetStateAction<number>>;
    sweatCart3: number;
    sweatSetCart3: Dispatch<SetStateAction<number>>;
    sweatCart4: number;
    sweatSetCart4: Dispatch<SetStateAction<number>>;
    sweatCart5: number;
    sweatSetCart5: Dispatch<SetStateAction<number>>;
    sweatCart6: number;
    sweatSetCart6: Dispatch<SetStateAction<number>>;
    stock1: number;
    setStock1: Dispatch<SetStateAction<number>>;
    stock2: number;
    setStock2: Dispatch<SetStateAction<number>>;
    stock3: number;
    setStock3: Dispatch<SetStateAction<number>>;
    stock4: number;
    setStock4: Dispatch<SetStateAction<number>>;
    stock5: number;
    setStock5: Dispatch<SetStateAction<number>>;
    stock6: number;
    setStock6: Dispatch<SetStateAction<number>>;
    sweatStock1: number;
    sweatSetStock1: Dispatch<SetStateAction<number>>;
    sweatStock2: number;
    sweatSetStock2: Dispatch<SetStateAction<number>>;
    sweatStock3: number;
    sweatSetStock3: Dispatch<SetStateAction<number>>;
    sweatStock4: number;
    sweatSetStock4: Dispatch<SetStateAction<number>>;
    sweatStock5: number;
    sweatSetStock5: Dispatch<SetStateAction<number>>;
    sweatStock6: number;
    sweatSetStock6: Dispatch<SetStateAction<number>>;
}): JSX.Element {
    return (
        <>
            <div>
                <header>Cart</header>
                <CartDisplay
                    shirtCart1={shirtCart1}
                    setShirtCart1={setShirtCart1}
                    shirtCart2={shirtCart2}
                    setShirtCart2={setShirtCart2}
                    shirtCart3={shirtCart3}
                    setShirtCart3={setShirtCart3}
                    shirtCart4={shirtCart4}
                    setShirtCart4={setShirtCart4}
                    shirtCart5={shirtCart5}
                    setShirtCart5={setShirtCart5}
                    shirtCart6={shirtCart6}
                    setShirtCart6={setShirtCart6}
                    sweatCart1={sweatCart1}
                    sweatSetCart1={sweatSetCart1}
                    sweatCart2={sweatCart2}
                    sweatSetCart2={sweatSetCart2}
                    sweatCart3={sweatCart3}
                    sweatSetCart3={sweatSetCart3}
                    sweatCart4={sweatCart4}
                    sweatSetCart4={sweatSetCart4}
                    sweatCart5={sweatCart5}
                    sweatSetCart5={sweatSetCart5}
                    sweatCart6={sweatCart6}
                    sweatSetCart6={sweatSetCart6}
                    stock1={stock1}
                    setStock1={setStock1}
                    stock2={stock2}
                    setStock2={setStock2}
                    stock3={stock3}
                    setStock3={setStock3}
                    stock4={stock4}
                    setStock4={setStock4}
                    stock5={stock5}
                    setStock5={setStock5}
                    stock6={stock6}
                    setStock6={setStock6}
                    sweatStock1={sweatStock1}
                    sweatSetStock1={sweatSetStock1}
                    sweatStock2={sweatStock2}
                    sweatSetStock2={sweatSetStock2}
                    sweatStock3={sweatStock3}
                    sweatSetStock3={sweatSetStock3}
                    sweatStock4={sweatStock4}
                    sweatSetStock4={sweatSetStock4}
                    sweatStock5={sweatStock5}
                    sweatSetStock5={sweatSetStock5}
                    sweatStock6={sweatStock6}
                    sweatSetStock6={sweatSetStock6}
                />
            </div>
        </>
    );
}

export default cartEditor;
