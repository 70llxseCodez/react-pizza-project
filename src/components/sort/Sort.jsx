import React, { useContext } from 'react'
import Style from './Sort.module.css'
import { MyContext } from '../../App'

const Sort = () => {
    const items = ['Все','Вегетарианская','Гриль','Острые','Закрытые']
    const {category,onClickCategory} = useContext(MyContext)
  return (
    <div>
        <div className={Style.sort}>
            {
                items.map((item,index) => {
                    return(
                        <div key={index} onClick={()=>  onClickCategory(index)} className={category === index ? Style.activeSortItem : Style.sortsItem}>
                            {item}
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Sort