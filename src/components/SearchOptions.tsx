import './SearchOptions.css'

const SearchOptions = () => {
  return(
    <div className='search-options'>
      <p>Resultados</p>
      <ul>
        <li>
          <select>
            <option>20</option>
            <option>30</option>
            <option>40</option>
          </select>
          <p>itens por página</p>
        </li>
        <li>
          <button>ai</button>
        </li>
      </ul>
    </div>
  )
}

export default SearchOptions