import React from "react";

const shoeDiv = {
  width : "350px",
  height : "350px"
}
const container = {
  border : "2px solid black",
  width : "300px",
  height : "500px",
  marginLeft : "20px"
}

const imageDiv = {
  width : "300px",
  height : "350px",
  // marginLeft : "30px"
}
const descDiv = {
   textAlign : "center",
   fontSize : "20px",
   fontWeight : "bolder",
   marginTop : "60px"
}

const ShoeCard = ({item}) => {
  let shoeId = null;
  return (
    <div style={container} data-cy={`shoe-card-wrapper-${shoeId}`} >
      <div style={shoeDiv}>
        <img style={imageDiv} data-cy="shoe-card-image" src={item.image} alt="shoes" />
      </div>
      <div style={descDiv}>
        <div data-cy="shoe-name">{item.name}</div>
        <div data-cy="shoe-category">{item.category}</div>
      </div>
    </div>
  );
};

export default ShoeCard;

