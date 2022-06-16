import React  from "react";
import { ReactDOM } from "react";
import {Link} from "react-router-dom"

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
        <table>
            <thead>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>More Details</th>
            </thead>
            <tbody>
            {
                products?.map((product)=>
                (
                 <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <Link to={`/products/${product.id}`}>More Details</Link>
                 </tr>   
                ))
            }
            </tbody>
        </table>
    )
} 

export default Products;