import React from 'react'
import './list.scss'
import Card from '../Card/Card';
const data = [
  {
    id: 'klanwd19w',
    img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1000",
    img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1000",
    title: "Long Sleeve T-shirt",
    isNew: true,
    oldPrice: 819,
    newPrice: 415,
  },
  {
    id: '98dwqo90',
    img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1000",
    img2: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1000",
    title: "Coat",
    isNew: true,
    oldPrice: 1125,
    newPrice: 817,
  },
  {
    id: 'awdawl28',
    img2: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1000",
    img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1000",
    title: "Sweatshirt",
    isNew: false,
    oldPrice: 1725,
    newPrice: 1248,
  }
];
const List = () => {
  return (
    <div className='list'>
      {data.map((e)=>(
        <Card item={e} key={e.id}/>
      ))}
    </div>
  )
}

export default List