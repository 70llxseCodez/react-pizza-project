import React, { useState } from 'react'
import Style from './Pizza.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../redux/cardSlice'


const CardPizza = ({item}) => {
  const [clickSize,setClickSize] = useState(0)
  const dispatch = useDispatch()
  const countItem = useSelector(state => state.card.items.find(obj => obj.id === item.id))
  const addedCount = countItem ? countItem.count : 0


  function onClickCard(){
    const Item = {
      id:item.id,
      title:item.title,
      img:item.imageUrl,
      price:item.price,
      sizes:item.sizes[clickSize]
    }
  dispatch(addItem(Item))
  }
 
  
  return (
    <div>
     
      
        <div className={Style.cardItem}>
          <img src={item.imageUrl} alt="" />
          <h3><b>{item.title}</b></h3>
         
          <div className={Style.sizesAndTypes}>
            <div className={Style.types}>
          {
            item.sizes.map((obj,index) => {
              return(
                  <div key={index} onClick={()=>setClickSize(index)} className={clickSize === index? Style.typesCursor_active : Style.typesCursor}>{obj} см.</div>
              )
            })
            
          }
            </div>

          </div>
         <div className={Style.generelFutter_pizza}>
          <div className={Style.forPrice}>
            <h3>от {item.price} ₽</h3>
          </div>
          <button onClick={onClickCard} className={Style.forButton}>
            + Добавить {addedCount > 0 &&<span><b>{addedCount}</b></span>}
          </button>
         </div>
           
        
        </div>
    </div>
  )
}

export default CardPizza