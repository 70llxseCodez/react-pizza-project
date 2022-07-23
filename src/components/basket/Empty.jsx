import React from 'react'
import Style from './Basket.module.css'
import NotSmile from '../../../src/img/notsmile.svg'
import Gobasket from '../../../src/img/gobasket.png'
const Empty = () => {
  return (
    <div>
        <div className={Style.emty}>
            <h2>Корзина пустая <img src={NotSmile} alt="" /></h2>
            <p>Вероятней всего, вы не заказывали ещё пиццу. <br />
                Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img className={Style.img} src={Gobasket} alt="" />

        </div>
    </div>
  )
}

export default Empty
