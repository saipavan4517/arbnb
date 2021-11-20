import React,{useState,useEffect} from 'react'
import { makeStyles } from '@mui/styles';
import {Card, Container, Grid, Typography} from "@mui/material"
import axios from "axios"
import { Link ,useHistory} from 'react-router-dom';


const useStyles = makeStyles({
     Container :{
         display: "flex"
     },
     image : {
        height : "300px",
       width : "270px",
       objectFit : "fill"
     },
     Card :{
        height : "300",
        width : "270px",
        margin : 5
   }
  });

  

const Products = ({product}) => {
    console.log("ProductsByCategory :: in product",product)
    const classes =  useStyles()
    const history = useHistory()
    const [productInfo,setProductInfo] = useState([])

    const getSingleProduct = async(item) => {
        const {data} =await  axios.get(`https://fakestoreapi.com//products/${item}`)
           setProductInfo(data)
           console.log("profuct info",data)
           history.push({pathname : `/${data.category}/product/${data.id}`, state : data})
          
      }

    //   const getMultipleProducts = async(item) => {
    //     const {data} =await  axios.get(`https://fakestoreapi.com//products?limit=5`)
    //        setProductInfo(data)
    //        console.log("profuct info",data)
    //        history.push({pathname : `/${data.category}/product/${data.id}`, state : data})
          
    //   }

    const handleLink =(id)=>{
        console.log("clicked",id)
        getSingleProduct(id)
      
    }

   

    return (
   
        <div onClick={()=> handleLink(product.id)}>
            <Card style={{ borderRadius : "5%"} } className={classes.Card}>
                    <img src={product?.image}  className={classes.image}/>
                    <span>{product?.title} {"  "}</span>    
            </Card>
            
        
         </div>
   
     
    )
}
 
export default Products
