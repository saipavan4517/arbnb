import React,{useState,useEffect} from 'react'
import { makeStyles } from '@mui/styles';
import {Card, Container, Grid, Typography} from "@mui/material"
import axios from "axios"
import { Link ,useHistory} from 'react-router-dom';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

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

    

    const handleLink =(id)=>{
        console.log("clicked",id)
        getSingleProduct(id)
      
    }
    const options = {
        items: 1,
        nav: true,
        rewind: true,
        autoplay: true
    };
     
    const events = {
        // onDragged: function(event) {...},
        // onChanged: function(event) {...}
    };

   

    return (
   
        <div onClick={()=> handleLink(product.id)}>
            <Card style={{ borderRadius : "5%"} } className={classes.Card}>
                    {/* <OwlCarousel ref="car" options={options} events={events} >

                    <div><img src="{product?.image}" alt="The Last of us"/></div>

                    <div><img src="{product?.image}" alt="GTA V"/></div>

                    <div><img src="{product?.image}" alt="Mirror Edge"/></div>

                    </OwlCarousel> */}
                    <div className="item">
                    <OwlCarousel className='owl-theme' items={1} loop margin={10} nav> <img src={product?.image}  className={classes.image}/>
                    <span>{product?.title} {"  "}</span>    
</OwlCarousel>
                    </div>
                   
            </Card>
         </div>
   
     
    )
}
 
export default Products
