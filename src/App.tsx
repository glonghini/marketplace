import './App.css';
import CategoriesBar from './components/CategoriesBar';
import Header from './components/Header';
import Slider from './components/Slider';

function App() {
  return (
    <div className="App">
      <Header/>
      <CategoriesBar/>
      <Slider/>
    </div>
  );
}

export default App;
