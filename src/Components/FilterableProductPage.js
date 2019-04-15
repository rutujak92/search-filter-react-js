import React, { Component } from 'react';
import FilterContainer from './FilterContainer';
import SearchBar from './SearchBar.js';
import ProductResults from './ProductResults';
import '../assets/App.css';

class FilterableProductPage extends Component {
  constructor(props){
    super(props);
    this.state={
      filterText : '',
      relevantProducts: this.props.products,
      products : this.props.products,
    }
  }
  //filter according to text
  handleSearch(e){
    const newFilterText = e.target.value.toLowerCase();
    let newRelevantProducts= [];
    const products = this.state.products;
    if(newFilterText===''){
      newRelevantProducts = products;
    }
    else{
       products.forEach(product=>{
        if(product.name.toLowerCase().indexOf(newFilterText)>-1){
          newRelevantProducts.push(product)  
        } 
      });
    }
    
    this.setState({
      filterText : newFilterText,
      relevantProducts : newRelevantProducts.length>0 ? newRelevantProducts:[],
      
    })
  }
  //filter according to category
  handleFilter(e){
   const selectedNodes = document.querySelectorAll('input[name=filters]:checked');
   const selectedFilters = [];
   selectedNodes.forEach(node => {
     selectedFilters.push(node.value);
   })
   const products = this.state.products;
    if(selectedFilters.length>0){
      
    }
   const newRelevantProducts = [];
   products.forEach(product =>{
     if(selectedFilters.includes(product.category)){
        newRelevantProducts.push(product);
     }
   });
   this.setState({
     relevantProducts:newRelevantProducts,
   });
  }
   render() {
    
    return (
      <div className="container">
        <SearchBar onChange={this.handleSearch.bind(this)}/>
        <div className="container">
          <FilterContainer categories={this.props.categories} onChange={this.handleFilter.bind(this)}/>
          <ProductResults products={this.state.relevantProducts}/>
        </div>
        
       </div>
    );
  }
}
export default FilterableProductPage;
