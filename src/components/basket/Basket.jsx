import { useSelector} from 'react-redux'
import BaskeItem from './BaskeItem'
import Shop from '../../../src/img/shopping.png'
import Trash from '../../../src/img/trash.svg'
import Style from './Basket.module.css'
import Pointer from '../../../src/img/pointer.svg'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {clearItem} from '../../redux/cardSlice'
import Empty from './Empty'



const Basket = () => {
  const {items,price} = useSelector(state => state.card)
  const totalCount = items.reduce((sum,item) => sum + item.count,0)
  const Items= useSelector(state => state.card.items)
  const dispatch = useDispatch()
 
 if(!price || totalCount === 0){
  return <Empty/>
 }else{
  return ( 

   <div className={Style.generalBasket} >

    <div className={Style.Top}>
      <div style={{display:'flex'}}><img  style={{marginRight:'14px'}} src={Shop} alt="" /> <h2 style={{fontSize:'27px'}}>Корзина</h2></div>
      <div onClick={()=> dispatch(clearItem())} style={{cursor:'pointer'}}><img src={Trash} alt="" /> <span style={{marginLeft:'10px'}}>Очистить корзину</span></div>
    </div>
    {
      Items.map((obj,index) => {
        return (
          <BaskeItem obj={obj} key={index}/>
        )
      })
    }
     <div className={Style.general_price}>
      <div><p>Всего пицц: <span> {totalCount } шт.</span></p></div>
      <div className={Style.price2}><p>Сумма заказа: <span> {price} ₽</span></p></div>
    </div>
    <div className={Style.backAndBuy}>
     <div className={Style.first_button}> <button> <NavLink to='/'> <img style={{marginRight:'10px'}} src={Pointer} alt="" />  Вернуться назад </NavLink></button></div>
     <div className={Style.second_button}>  <button >Оплатить сейчас</button></div>
    </div>
    {/* <Empty/> */}
   </div>
  )}
}

export default Basket