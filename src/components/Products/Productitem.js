import React from 'react'
import { makeStyles } from '@mui/styles';



const useStyles = makeStyles({
     Container :{
         flex : "1",

     },
     image : {
        height : "303px",
       width : "302px",
       objectFit : "fill"
     }


  });
  
  

const Productitem = ({item}) => {
    const classes =  useStyles()
    return (
        <div className={classes.container}>
            <div>
                <img src={item.image}  className={classes.image}/>
            </div>  
            
            <div>
                <h3>{item.title}</h3>
            </div>         
        </div>
    )
}

export default Productitem
