import React  from "react";

import {Link} from "react-router-dom";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

function Products()
{
    const [products,setProducts]=React.useState([]);
    React.useEffect(
        ()=>{
            fetch(`http://localhost:3001/products`)
            .then((res)=>res.json())
            .then((res)=>{
                setProducts(res);
            })
            .catch((error)=>
            {
                console.log(error);
            })
        },[]
    )
    return(
        
        <Table variant="striped" colorScheme="teal">
            <Thead>
                
                <Th>Product Name</Th>
                <Th>Product Price</Th>
                <Th>More Details</Th>
             
            </Thead>
            <Tbody>
            {
                products?.map((product)=>
                (
                 <Tr key={product.id}>
                    <Td>{product.title}</Td>
                    <Td>{product.price}</Td>
                    <Td><Link to={`/products/${product.id}`}>More Details</Link></Td>
                    
                 </Tr>   
                ))
            }
            </Tbody>
        </Table>
        
    )
} 

export default Products;