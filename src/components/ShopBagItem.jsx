import React, {useContext} from 'react'
import './shopBagItem.css'
import { AppContext } from '../App'

function ShopBagItem({game, index}) {
    const { bag, setBag } = useContext(AppContext);

    const handelRemoveFromBag = (game) => {
       setBag(bag.filter(item => item._id !== game._id))
    }
    
  return (
    <tr className="shopBagItem">
      <th scope='row'>{index + 1}</th>
      <td>
        <img src={game.img} alt="img" className='img-fluid' />
      </td> 
      <td>{game.title}</td>
      <td>${game.price.toFixed(2)}</td>
      <td>{game.discount * 100}%</td>
      <td>${(game.price * (1-game.discount)).toFixed(2)}</td>
      <td>
        <a href="#" onClick={() => handelRemoveFromBag(game)}>
          <i className="bi bi-trash3"></i>
        </a>
      </td>
    </tr>
  )
}

export default ShopBagItem