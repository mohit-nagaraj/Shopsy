import React from 'react'
import './grid.scss'
import { Link } from 'react-router-dom'

const Grid = () => {
  return (
    <div className='grid'>
        <div className="item1"><Link to='/products/1'><button>Sale</button></Link></div>
        <div className="item2"><Link to='/products/2'><button>New season</button></Link></div>
        <div className="item3"><Link to='/products/3'><button>Men</button></Link></div>
        <div className="item4"><Link to='/products/4'><button>Accessories</button></Link></div>
        <div className="item5"><Link to='/products/5'><button>Women</button></Link></div>
        <div className="item6"><Link to='/products/6'><button>Shoes</button></Link></div>
    </div>
  )
}

export default Grid