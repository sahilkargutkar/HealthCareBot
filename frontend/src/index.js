import React from 'react';
import ReactDOM from 'react-dom'
import Navbar from './components/Navbar'
import './index.css'
import Content from './components/Content'

 const App =() =>{
  return(
    <div >
      <Navbar />
    <div className='main'> 
      <Content />
    </div>
    </div>
    )
}

ReactDOM.render(  <App />,document.getElementById('root'));

