import React, { useState } from 'react'
import Nav from '../components/Nav'
import Categories from '../Category'
import Card from '../components/Card'
import { food_items } from '../food'
import { dataContext } from '../context/UserContext'
import { useContext } from 'react'
import { RxCross2 } from "react-icons/rx";
function Home() {
    let {Cate,setCate,input,showCart,setShowCart}=useContext(dataContext)
  function filter(category) {
    if (category === "all") {
      setCate(food_items)
    } else {
      let newList = food_items.filter(
        (item) => item.food_category === category
      )
      setCate(newList)
    }
  }
  return (
    <div className='bg-slate-200 w-full min-h-screen'>
      <Nav />
      {!input? <div className='flex flex-wrap justify-center items-center gap-6 w-full'>
        {Categories.map((item) => (
          <div
            key={item.id}
            onClick={() => filter(item.name)}  
            className='w-[140px] h-[150px] bg-white flex flex-col items-start gap-5 p-5 justify-start text-[20px] font-semibold text-gray-600 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-200'
          >
            {item.icon}
            {item.name}
          </div>
        ))}
        </div>:null}
      <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8'>
        {Cate.map((items) => (
          <Card
            key={items.id}
            name={items.food_name}
            image={items.food_image}
            id={items.id}
            price={items.price}
            type={items.food_type}
          />
        ))}
      </div>
      <div className={`w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 ${showCart?"translate-x-0":"translate-x-full"}`}>
      <header className='w-[100%] flex justify-between items-center'>
        <span className=' text-green-400 text-[18px]'>Order Items</span>
        <RxCross2 onClick={()=>setShowCart(false)} className='w-[30px] h-[20px] text-green-400 text-[18px] font-semibold cursor-pointer hover:text-gray-600'/>
      </header>
      </div>
    </div>
    )
}
export default Home