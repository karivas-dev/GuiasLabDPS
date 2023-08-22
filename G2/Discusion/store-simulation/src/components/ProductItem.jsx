import React from "react";
const ProductItem = ({ id, name, price, image }) => {
  return (
    <div className="col-4 my-4">
      <div className="card text-center">
        <div className="card-header"><b>Product id:</b> {id}</div>
        <img src={image} className="card-img-top" alt="Product image"/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            {price}
          </p>
          <a href="#" className="btn btn-primary">
            Buy it now
          </a>
        </div>
      </div>
    </div>
    
  );
};
export default ProductItem;

