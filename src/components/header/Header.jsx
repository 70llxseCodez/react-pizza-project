import React,{useContext} from 'react'
import Style from './Header.module.css'
import logo from '../../../src/img/image 1.png'
import basket from '../../../src/img/basket.svg'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { MyContext } from '../../App'

const Header = () => {
  const {items,price} = useSelector(state => state.card)
 const {value,setValue} = useContext(MyContext)

   const totalCount = items.reduce((sum,item) => sum + item.count,0)

  return (
    <div className={Style.header}>
      <NavLink to={'/'}>

        <div className={Style.Logo}>
            <div>
                <img src={logo} alt="" />
             </div>
            <div>
                <h2><b>REACT PIZZA</b></h2>
                <p>самая вкусная пицца во вселенной</p>
            </div>
        </div>
      </NavLink>
      <div>
          <input value={value} onChange={e => setValue(e.target.value)} type="text" placeholder='search' />
      </div>
        <NavLink to={'/basket'}>
        <div className={Style.priceAndBasket}>
           <div><p><b>{price} ₽</b></p></div>
           <span></span>
           <div><img src={basket} alt="" /> {totalCount}</div>
        </div>
        </NavLink>
    </div>
  )
}

export default Header