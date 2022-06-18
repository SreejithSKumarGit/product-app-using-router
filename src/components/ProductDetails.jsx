import React from "react";
import {useParams} from "react-router-dom";
import {Spinner,Box,Image,Button, useDisclosure,Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton} from "@chakra-ui/react"

function ProductDetails()
{
    const{id}=useParams();
    const [productDetail,setProductDetail]=React.useState([]);
    const [isLoading,setIsLoading]=React.useState(false);
    const [isError,setIsError]=React.useState(false);
    const {isOpen, onOpen, onClose}=useDisclosure()

    React.useEffect(()=>
    {
        setIsLoading(true);
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res)=>res.json())
        .then((res)=>{
            setIsError(false);
            setProductDetail(res);
            console.log(res);
        })
        .catch((error)=>
        {
            setIsError(true);
            console.log(error);
        })
        .finally(()=>setIsLoading(false));
    },[id]);
    if(isLoading)
    {
        return (
            <Box textAlign="center" marginTop="250px">
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
                textAlign="center"
            />
            </Box>
        );
    }
    if(isError)
    {
        return (
            <h1>Error...</h1>
        )
    }
    const {image,title,price,description}=productDetail;
    return (
        <Box textAlign="center" width="200px" margin="auto" boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Image textAlign="center" boxSize="200px" src={image} borderRadius='full'  />
            <h3>{title}</h3>
            <h3>₹ {price}</h3>
            <Button onClick={onOpen}>Description</Button>
            <Box width="400px" mt="150px">
                <Modal size="sm" isCentered isOpen={isOpen} onClose={onClose}>
                  
                    <ModalContent>
                        <ModalHeader>Description</ModalHeader>
                    <ModalCloseButton/>
                        <ModalBody>
                        {description}
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </Box>
        </Box>
    );

}

export default ProductDetails;


//box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;