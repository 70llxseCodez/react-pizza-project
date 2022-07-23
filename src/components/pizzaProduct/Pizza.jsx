import React from 'react'
import CardPizza from './CardPizza'
import Style from './Pizza.module.css'
import { MyContext } from '../../App'
import { useContext } from 'react'
import Sort from '../sort/Sort'





const Pizza = () => {
  const {data} = useContext(MyContext)
  return (
    <div>
          <Sort/>
        <h1  className={Style.Products_card}>Все пиццы</h1>
        <div  className={Style.cards}>

       
        {
            data.map((item,index) =>{
                return (
                  <CardPizza item={item} key={index}/>
                )
            })
            
        }
         </div>
    </div>
  )
}

export default Pizza