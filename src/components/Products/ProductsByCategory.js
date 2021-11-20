import React from 'react'
import {Card, Grid,Container} from "@mui/material"
import Productitem from './Products'
import { useLocation } from "react-router-dom";




const ProductsByCategoryComponent = (props) => {
    const location = useLocation();

    console.log("dataererer ",location.state)
    const {classes} =props
    
    return (
        <Container>
            <Grid  container spacing={2}>                      
                {
                   location.state &&  location.state.map((product)=>{
                        return (
                            <Productitem product={product} classes={classes}/>
                        )

                    })
                }
            </Grid>
        </Container>
            
    )
}

export default ProductsByCategoryComponent
