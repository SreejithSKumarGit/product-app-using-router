import React from "react";
import {Link} from "react-router-dom";
import {Box} from "@chakra-ui/react"

function Navbar()
{
    return(
        <Box 
        display="flex"
        flexDirection="row" 
        justifyContent="space-between"
        padding="10px"
        fontSize="22px"
        border="1px solid #cecece"
        borderRadius="8px"
        >
            <Link style={{textDecoration:"none"}} to="/">Home</Link>
            <Link style={{textDecoration:"none"}}to="/products">Products</Link>
        </Box>
    );
}
export default Navbar;