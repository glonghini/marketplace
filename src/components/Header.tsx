import './Header.css'

const Header: React.FC = () => {
  return (
    <header>
      <div className='title'>Marketplace</div>
      <div className='search-input-container'>
        <input type='search' placeholder='O que você está buscando?'/>
        <button>
          Buscar
        </button>
      </div>
      <ul>
        <li>Login</li>
        <li>Signup</li>
      </ul>
    </header>
  )
}

export default Header