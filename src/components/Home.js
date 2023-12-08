import React, { useState } from "react"
import Products from "./Products/Products";
import Category from "./categories/Category";
function Home() {
    const [filterDataValue, setFilterDataValue] = useState("jewelery");
    return (
        <>
            <Category setFilterDataValue={setFilterDataValue} />
            <Products filterDataValue={ filterDataValue } />
        </>
    )
}
export default Home