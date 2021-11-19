import React,{useEffect,useState} from 'react'
import {AppBar ,Toolbar,Card,Button,Container, CardMedia, Typography, Grid,} from "@mui/material"
import axios from "axios"
import { makeStyles } from '@mui/styles';
import { Box, width } from '@mui/system';
import Productitem from './Products/Productitem'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
 stickyHeader: {
      position: "sticky",
      top: 0.5,
      height : 70,
  },
  Img : {
      padding : "10px"
  },
  imgCard:{ 
    height : "257",
    width  : "207" ,
  },
  Card :{
       height : "350px",
       width : "300px",
  }
 
});



const AllNature = () => {
   
    


    const classes = useStyles()

    const [products,setProducts] = useState([])
    const [Categories,setCategories] = useState([])
    const [ProductsByCategory,setProductsByCategory] = useState([])

    const getProducts = async() => {
      const {data} =await  axios.get("https://fakestoreapi.com/products")
      console.log("Products :",data)
      setProducts(data)
   }

   const getCategories = async() => {
    const {data} =await  axios.get("https://fakestoreapi.com/products/categories")
    console.log("Categories :",data)
      setCategories(data)
  }

  const getProductsByCategories = async() => {
    const {data} =await  axios.get("https://fakestoreapi.com/products/categories")
    console.log("Categories :",data)
      setCategories(data)
  }

  const handleCategory = ()=>{

  }


   
   useEffect(()=>{
     getProducts()
   },[])

   useEffect(()=>{
    getCategories()
  },[])

   const handleData = ()=>{
     getProducts()
     getCategories()
     
   }
   
    return (
        <>  
            <AppBar position="static">
                <Toolbar style={{background : "white"}} className={classes.Appbar}>
                      <h2 style={{color : "red"}}>airbnb</h2>    
                </Toolbar>
            </AppBar> 
            <br />
               <div style={{background : "white"}}  className={classes.stickyHeader}>
                    <Grid container spacing={2} >   
                        {Categories && Categories.map((category,index)=>{
                            return(
                                <Grid item key={category[index]} xs={12} sm={6} md={3}  spacing={2}> 
                                   <Button style={{color : "#484848",padding:"10px"}} onClick={(e)=>handle}>{category}</Button>
                                </Grid>
                            )}
                        )}   
                    </Grid>  
                    <br />      
               </div>
            <div>
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                        pr :5,
                        pl :10
                    }}
                 >
                    
                        <Grid sx={{ flexGrow: 1 }} container spacing={1}>   
                            {products && products.map((product)=>{
                                return(
                                    <Grid item xs={12} sm={6} md={3} >
                                        <Card style={{ borderRadius : "5%"}}className={classes.Card}>
                                            <Productitem item={product} />
                                        </Card>
                                    </Grid>
                                )
                            
                            }) }
                        </Grid>
                
               </Box>
            </div>
            
        </>
    )
}

export default AllNature
