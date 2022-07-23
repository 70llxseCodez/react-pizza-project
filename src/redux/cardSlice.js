import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items:[],
    price:0
}

const cardSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem(state,action){
            // state.items.push(action.payload)
            const findItem = state.items.find(obj => obj.id === action.payload.id)

            if(findItem){
                findItem.count++
            }else{
                state.items.push({
                    ...action.payload,
                    count:1
                })
            }



            state.price = state.items.reduce((sum,obj) => {
               return  (obj.price * obj.count) + sum
                },0)
        },
        plusItem(state,action){
            const findItem = state.items.find(obj => obj.id === action.payload.id)
            if(findItem){
                findItem.count++
            } 
            state.price = state.items.reduce((sum,item) => (item.price + state.price),0)
        },
        minusItem(state,action){
            const findItem = state.items.find(obj => obj.id === action.payload.id)
            if(findItem.count === 1){
                findItem.count =1
                state.price = state.price
            }else {
                findItem.count--
                state.price = state.items.reduce((sum,item) => ( state.price - item.price),1)
            }
         
        },
        removeItem(state,action){   
            state.items = state.items.filter(obj => obj.id !== action.payload)
        },
        clearItem(state){
            state.items = []
            state.price = 0
        }   
     }

})


export const {addItem, plusItem, minusItem,removeItem,clearItem } = cardSlice.actions
export default cardSlice.reducer