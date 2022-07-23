import React from 'react'
import Style from './Sort.module.css'

const SortHelp = ({item,index,onClickCategory,category}) => {
  return (
    <div onClick={()=>onClickCategory(index)} className={category === index ? Style.activeSortItem : Style.sortsItem}>
    {item}
</div>
  )
}

export default SortHelp