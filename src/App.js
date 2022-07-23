import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Pizza from './components/pizzaProduct/Pizza';

import { createContext } from 'react';
import { Routes,Route } from 'react-router-dom';
import Basket from './components/basket/Basket';
// import {Route,Routes} from 'react-router-dom';



export const MyContext = createContext();


 function  App() {

  const [datas,setData] = useState([])
  const [category,setCategory] = useState(0)
  const [value,setValue] = useState('')
  const data = datas.filter(obj => {
    if(obj.title.toLowerCase().includes(value.toLowerCase())){
      return true
    }else{
      return
    }
  })

  useEffect(()=>{

axios.get(`https://626d16545267c14d5677d9c2.mockapi.io/items?${category > 0 ? `category=${category}`: '' }`)
      .then(res => setData(res.data))
  },[category])

  function onClickCategory(i){
        setCategory(i)
  }
  return (

    <div className="App">
      <div className="container">
            <MyContext.Provider value={{onClickCategory,category,data,value,setValue}}>
          <Header/>
              <Routes>
               <Route  path='/' element={<Pizza/>}/>
               <Route path='basket' element={<Basket/>}/>
               <Route path='*' element={<h1>not found</h1>}/>
              </Routes>
             
          </MyContext.Provider>
      </div>
    </div>
  );
}

export default App;
