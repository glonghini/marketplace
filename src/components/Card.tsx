import './Card.css'

type Product = {
  name: string,
  price: number,
  category: string,
  info: string[]
}

interface ProductInfo {
  product: Product
}

const Card: React.FC<ProductInfo> = ({ product }) => {
  return(
    <div className='card'>
      <div className='dummy-image' style={{backgroundColor: 'pink'}}></div>
      <p className='price'>R$ { product.price }</p>
      <p className='name'>{ product.name }</p>
      <p className='category'> { product.category }</p>
      <p className='info'>{ product.info }</p>
    </div>
  )
}

export default Card