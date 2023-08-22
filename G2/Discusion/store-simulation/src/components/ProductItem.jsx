import React from "react";
const ProductItem = ({ id, name, price, image }) => {
  return (
    <div className="col-4 my-4">
      <div class="card text-center">
        <div class="card-header"><b>Product id:</b> {id}</div>
        <img src={image} class="card-img-top" alt="Product image"/>
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">
            {price}
          </p>
          <a href="#" class="btn btn-primary">
            Buy it now
          </a>
        </div>
      </div>
    </div>
    
  );
};
export default ProductItem;

