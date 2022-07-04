import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import Filter from "../Components/Filter";
import axios from "axios";
import { getShoesDataFailure, getShoesDataRequest, getShoesDataSuccess } from "../Redux/AppReducer/action";
import ShoeCard from "../Components/ShoeCard";
import "../ShoeCard.css"

const container = {
  //  border : "1px solid red",
   display : "flex",
}
const filter = {
  border : "2px solid black",
  display : "flex",
  width : "200px"
  
}

const Shoes = () => {

    const shoes = useSelector((state) => state.shoes)
    const dispatch = useDispatch();
   
    const getShoes = () => {

      dispatch(getShoesDataRequest());
      axios
      .get("/shoes")
      .then((res) => dispatch(getShoesDataSuccess(res.data)))
      .catch((err) => dispatch(getShoesDataFailure(err)))
    };

    useEffect(() => {
       if(shoes.length===0)
       {
          getShoes();
       }
    }, [])

    console.log(shoes);

  return (
    <div style={container}>
       <div style={filter}><Filter /></div>
      <div className="shoeCard">
        {
          shoes?.map((item) => {
             return (
               <div key={item.id}>
                 <ShoeCard item={item} />
               </div>
             ) 
          })
        }
      </div>
    </div>
  );
};

export default Shoes;

