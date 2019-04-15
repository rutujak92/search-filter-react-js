import React, { Component } from 'react';
import '../assets/App.css';


class FilterContainer extends Component {
  render() {
      const rows = []
      this.props.categories.forEach(category=>{
        rows.push(
           <li  key={category.id}>
            <input type="checkbox" name='filters' onChange={this.props.onChange} value={category.name}/>
            <span>{category.name}</span>
          </li>
         
        );
       })
      return (
       <div className="col-sm-30 sidebar">
         <h6>Filter By</h6>
         <ul>
           {rows}
         </ul>
       </div>
      );
   }    
}

export default FilterContainer;