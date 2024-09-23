import './App.css'
import React from 'react';

function App() {
  let fooditems=['Fruits','Milk Product','Green Vegetables','Wheats and Oats','Dry Fruits','Carrot']

  return (
  
    <React.Fragment>
      <center>
      <div class="container">
     <h1>Healthy Food</h1>
     
     <ul class="list-group sej-list">
      <div className='list'>
      {fooditems.map(item=> <li class="sej-item" >{item}</li>)}
      </div> 
     </ul>
     </div>
     </center>
</React.Fragment>


    
  )
}

export default App






