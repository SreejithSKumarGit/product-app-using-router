import React from "react";
import {useParams} from "react-router-dom";

function ProductDetails()
{
    const{id}=useParams();
    const [productDetail,setProductDetail]=React.useState([]);

    React.useEffect(()=>
    {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res)=>res.json())
        .then((res)=>{
            setProductDetail(res);
            console.log(res);
        })
        .catch((error)=>
        {
            console.log(error);
        })
    },[id])
    const {image,title,price}=productDetail;
    return (
        <div>
            <img  stye={{width:"200px",textAlign:"center"}} src={image} alt="" />
            <h3>{title}</h3>
            <h3>Price: {price}</h3>
        </div>
    );

}

export default ProductDetails;