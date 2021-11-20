import React,{useState,useEffect} from 'react'
import {Button,Grid,Container} from "@mui/material"
import axios from "axios"
import { useHistory } from "react-router-dom";



const CategoriesComponent = () => {
   
     const history = useHistory()
    const [Categories,setCategories] = useState([])
    const [ProductsByCategory,setProductsByCategory] = useState([])

    const getCategories = async() => {
        const {data} =await  axios.get(`https://fakestoreapi.com/products/categories`)
          setCategories(data)
      }
    

    const getProductsByCategories = async(category) => {
        const {data} =await  axios.get(`https://fakestoreapi.com/products/category/${category}`)
           setProductsByCategory(data)
           history.push({pathname : `/category/${category}`, state : data})
      }

    useEffect(()=> getCategories(),[])

    const handleCategory = (category)=>{
         getProductsByCategories(category)
       
    }
    return (
        <div style={{ 
            display:"inlineFlex", 
            position: "sticky",
            top: 0.5,
            marginBottom : 30,
            background : "white"}}>
            <Grid  xs={12}  container spacing={2} >   
                {Categories && Categories.map((category,index)=>{
                    return(
                        <div style={{
                            marginLeft : "20px",                  
                            }}>
                             <Button style={{color : "#484848",padding:"10px"}} onClick={()=>handleCategory(category)}>{category}</Button>  
                        </div>     
                    )}
                )}   
            </Grid>  
        <br />      
       </div>
    )
}

export default CategoriesComponent
