import React,{useEffect,useState} from 'react'
import {AppBar ,Toolbar,Card,Button,Container, CardMedia, Typography, Grid,} from "@mui/material"
import axios from "axios"
import { makeStyles } from '@mui/styles';
import { Box, width } from '@mui/system';
import AllProducts from "./Products/AllProducts"


const useStyles = makeStyles({

 
});


const AllNature = () => {

    const classes = useStyles()

    const [products,setProducts] = useState([])

    const getProducts = async() => {
      const {data} =await  axios.get(`https://fakestoreapi.com/products`)
      setProducts(data)
   }

 

   useEffect(()=> getProducts(),[])

    return (
        <>  
            <div>
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                        pl:7,
                        
                    }}
                 >
                     <Grid  sx={{ flexGrow: 1 }} >
                             <AllProducts allProducts={products} />                    

                    </Grid>           
               </Box>
            </div>
            
        </>
    )
}

export default AllNature
