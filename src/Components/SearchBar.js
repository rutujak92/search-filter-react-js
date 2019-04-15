import React, { Component } from 'react';
import '../assets/App.css';

class SearchBar extends Component {
  
   render() {
    return (
       <div className="search-bar">
          <input type="text" placeholder="enter to search" onChange={this.props.onChange}/>
        </div>
    );
  }
}

export default SearchBar;