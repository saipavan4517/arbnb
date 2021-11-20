import React from 'react'
import {Card, Grid,Container} from "@mui/material"
import Products from './Products'


const AllProducts = (props) => {
    
    const {allProducts,classes} = props ;
    console.log("in all products",allProducts)
    return (
       
        <Grid  sx={{ flexGrow: 1 }} container >
          {
              allProducts && allProducts.map((product)=>{
                  return(          
                       <Products product={product} classes={classes}/>               
                  )

              })
          }    
      </Grid>      
    )
}

export default AllProducts
