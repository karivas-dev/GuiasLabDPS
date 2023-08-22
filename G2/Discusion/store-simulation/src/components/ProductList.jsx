import React, { useState } from "react";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const [products] = useState([
    {
      id: 1,
      name: "Nintendo Switch",
      price: "$339.00",
      image:
        "https://images.unsplash.com/photo-1585857188900-86a7c2c5f811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 2,
      name: "Game Gear",
      price: "$251.25",
      image:
        "https://images.unsplash.com/photo-1597840900578-2c0798e868c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1325&q=80",
    },
    {
      id: 3,
      name: "PSP Play Station Portátil",
      price: "$177.09",
      image:
        "https://images.unsplash.com/photo-1588689115724-a624efec3c93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },

    {
      id: 4,
      name: "SNES",
      price: "$129.99",
      image:
        "https://images.unsplash.com/photo-1587653666447-8a232c92e881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1481&q=80",
    },
    {
      id: 5,
      name: "Game Boy ADVANCE",
      price: "$168.99",
      image:
        "https://images.unsplash.com/photo-1622451748319-eae2f42d7267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 6,
      name: "Xbox Series S",
      price: "$559.99",
      image:
        "https://images.unsplash.com/photo-1605901309584-818e25960a8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1319&q=80",
    },
    {
      id: 7,
      name: "Game Boy Pocket",
      price: "$59.99",
      image:
        "https://images.unsplash.com/photo-1596998791568-386ef5297c2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
    },
    {
      id: 8,
      name: "SEGA Master System II",
      price: "$76.00",
      image:
        "https://images.unsplash.com/photo-1544272871-94010c4c8f94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=778&q=80",
    },
    {
      id: 9,
      name: "Nintendo 3DS",
      price: "$229.81",
      image:
        "https://m.media-amazon.com/images/I/71awaPbHxvL._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: 10,
      name: "Play Station 5",
      price: "$499.99",
      image:
        "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=654&q=80",
    },
  ]);

  return (
    <div className="container">
      <div className="row">
        {products.map((value) => (
          <ProductItem
            name={value.name}
            price={value.price}
            id={value.id}
            image={value.image}
          />
        ))}
      </div>
    </div>
  );
};
export default ProductList;
