import React, { useState } from 'react'
import './products.scss'
import List from '../../components/List/List'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
const Products = () => {
  
  const cId= parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(8000)
  const [sort, setSort] = useState('pop')
  const [selSubCat, setSelSubCat] = useState([])

  const {data,loading,error}=useFetch(`http://localhost:1337/api/sub-categories?filters[categories][id][$eq]=${cId}`)//in a particular category(like men,women,etc) getting and filtering subcategories
  const handleChange=(e)=>{
    const value=parseInt(e.target.value);
    const checked=e.target.checked;  
    setSelSubCat(checked? [...selSubCat,value]:selSubCat.filter(e=>e!==value));
  }
  
  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Categories</h2>
          {data?.map(e=><div className="inputItem" key={e.id}>
            <input type="checkbox" id={e.id}  value={e.id} onChange={handleChange}/>
            <label htmlFor={e.id}>{e.attributes.title}</label>
          </div>)}
        </div>
        <div className="filterItem">
          <h2>Price Range</h2>
          <span>0</span>
          <input type="range" min={0} max={8000} defaultValue={8000} onChange={e=>setMaxPrice(e.target.value)} style={{accentColor:"#002d76",color:"#002d76"}}/>
          <span>{maxPrice}</span>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" id='pop' value='pop' name='price' defaultChecked onChange={e=>setSort('pop')}/>
            <label htmlFor="pop">Popularity</label>
          </div>
          <div className="inputItem">
            <input type="radio" id='asc' value='asc' name='price' onChange={e=>setSort('asc')}/>
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id='desc' value='desc' name='price'onChange={e=>setSort('desc')}/>
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img className='catImg' src="https://source.unsplash.com/random/1600x300/?nature,night" alt="" />
        <List cId={cId} maxPrice={maxPrice} sort={sort} selSubCat={selSubCat}/>
      </div>
    </div>
  )
}

export default Products