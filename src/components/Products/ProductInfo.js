import React from 'react'
import { useLocation } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import {Card} from "@mui/material"

const useStyles = makeStyles({
  
    image : {
     
      objectFit : "fill"
    },
    Card :{
        height : "300",
        width : "270px",
        margin : 5
   }
  
 });

const ProductInfo = () => {
    const location = useLocation();
    const classes = {useStyles}


    const productInfo = location?.state
    return (
        <div>
              <Card style={{ borderRadius : "5%"} } className={classes.Card}>
                    <img src={productInfo?.image} style={{  height : "300px",width : "270px",}}/>
                    <h2>{productInfo?.title}</h2> 
            </Card>
            
        </div>
    )
}

export default ProductInfo
