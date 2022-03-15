import { useState } from "react"
import SearchOptions from "./SearchOptions"
import Card from "./Card"

import './Products.css'
import './ProductList.css'

type Products = {
  name: string,
  price: number,
  category: string,
  info: string[]
}[]

const Products: React.FC = () => {
  const [products, setProducts] = useState<Products>([
    {
      name: 'Produto 1',
      price: 99.90,
      category: '1',
      info: ['5 em estoque']
    },
    {
      name: 'Produto 2',
      price: 95.90,
      category: '1',
      info: ['5 em estoque']
    },
    {
      name: 'Produto 3',
      price: 89.90,
      category: '1',
      info: ['5 em estoque']
    },
    {
      name: 'Produto 4',
      price: 79.90,
      category: '1',
      info: ['5 em estoque']
    },
    {
      name: 'Produto 5',
      price: 129.90,
      category: '1',
      info: ['5 em estoque']
    }
  ])

  return(
    <div className='products'>
      <SearchOptions/>
      <div className='product-list'>
          {products.map((product, counter) => (
            <Card product={product} key={counter}/>
          ))}
      </div>
    </div>
  )
}

export default Products