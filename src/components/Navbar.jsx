import React from "react";
import {Link} from "react-router-dom"

function Navbar()
{
    return(
        <div style={{
        display:"flex",
        flexDirection:"row", 
        justifyContent:"space-between",
        padding:"10px",
        fontSize:"22px",
        border:"1px solid black"
        }}>
            <Link style={{textDecoration:"none"}} to="/">Home</Link>
            <Link style={{textDecoration:"none"}}to="/products">Products</Link>
        </div>
    );
}
export default Navbar;