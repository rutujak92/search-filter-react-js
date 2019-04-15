import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FilterableProductPage from './Components/FilterableProductPage';
import * as serviceWorker from './serviceWorker';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//data
const CATEGORIES = [
  {name:'Sarees',
   id:'001'
  },
  {name:'Footwear',
   id:'002'
  },
  {name:'Kurtis',
   id:'003'
  },
  {name:'Jewellery',
   id:'004'
  },
]
const PRODUCTS = [
  {category: 'Sarees',id:'1', price: '$49.99', desc: '', name: 'Casual Sarees',imageSrc:'https://img6.craftsvilla.com/image/upload/w_200,h_300/C/V/CV-36119-MCRAF16967484720-1551783490-Craftsvilla_1.jpg'},
   {category: 'Sarees',id:'9', price: '$49.99', desc: '', name: 'Traditional Sarees',imageSrc:'https://img6.craftsvilla.com/image/upload/w_300,h_450/C/V/CV-35633-MCRAF39631654810-1553844244-Craftsvilla_1.jpg'},
   {category: 'Kurtis',id:'2', price: '$49.99', desc: '', name: 'Ethnic Kurtis',imageSrc:'https://img6.craftsvilla.com/image/upload/w_300,h_450/C/V/CV-36451-MCRAF25092469190-1533213520-Craftsvilla_1.jpg'},
   {category: 'Footwear',id:'3', price: '$49.99', desc: '', name: 'Heels',imageSrc:'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/8194279/2019/3/14/00d9679d-e2e2-46e9-ba2f-b0b921d4b0eb1552554419106-Nike-Air-Zoom-Pegasus-35-1611552554418139-1.jpg'},
    {category: 'Jewellery',id:'4', price: '$49.99', desc: '', name: 'Earrings',imageSrc:'https://img6.craftsvilla.com/image/upload/w_300,h_300/C/V/CV-36203-MCRAF40276005690-1540292764-Craftsvilla_1.jpg'}
  
];

ReactDOM.render(<FilterableProductPage products={PRODUCTS} categories={CATEGORIES}/>, document.getElementById('root'));
