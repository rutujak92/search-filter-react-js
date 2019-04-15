import React, { Component } from 'react';
import Product from './Product';
import '../assets/App.css';

class ProductResults extends Component {
   render() {
      const rows = []
      this.props.products.forEach(product=>{
        rows.push(
          <Product productInfo={product}  key= {product.id} />
        );
       })
      return (
       <div className="col-sm-70 main">
   			<div className="container">
   				{rows}
   			</div>
        </div>
      );
   }    
}

export default ProductResults;