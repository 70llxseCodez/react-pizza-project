import React from 'react'
import Style from './Basket.module.css'
import Across from '../../../src/img/acrossIcon.png'
import { useDispatch } from 'react-redux'
import {plusItem,minusItem,removeItem} from '../../redux/cardSlice'



const BaskeItem = ({obj}) => {
    const dispatch = useDispatch()
  return (
    <div style={{marginTop:'100px'}}>
    
    <div className={Style.PizzaSave}>
        <div className={Style.douter_pizzasave1}>
          <div className={Style.img_big}>
              <img src={obj.img} alt="" />
          </div>
          <div>
              <h3>{obj.title}</h3>
              <p>{obj.sizes} см.</p>
          </div>
        </div>
        <div className={Style.douter_pizzasave2}>
          <button onClick={()=>dispatch(minusItem({id:obj.id}))}>-</button>
          <h3>{obj.count}</h3>
          <button onClick={()=>dispatch(plusItem({id:obj.id}))}>+</button>
        </div>
        <div>
          <h2 style={{fontSize:'20px'}}>{obj.price * obj.count}₽ </h2>
        </div>
        <div className={Style.douter_pizzasave3}>
          <button onClick={()=> dispatch(removeItem(obj.id))}><img src={Across} alt="" /></button>
        </div>
    </div>
   
    
  </div>
  )
}

export default BaskeItem