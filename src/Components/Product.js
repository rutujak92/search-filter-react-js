import React, { Component } from 'react';
import '../assets/App.css';


class Product extends React.Component {
   render() {
    const {category,price,desc,name,imageSrc} = this.props.productInfo;
    return (
     
     <div className="product-container">
        <img src={imageSrc}/>
        <ul>
          <li>{category}</li>
          <li>{price}</li>
          <li>{name}</li>
          <li>{desc}</li>
        </ul>
     </div>
    );
  }
}


export default Product;