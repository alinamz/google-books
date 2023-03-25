import '../index.css';
import Search from '../Search/Search';
import CardList from '../Components/CardList/CardList';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import CardDetals from '../Components/CardDetals/CardDetals';

function App() {

  const [card, setCard] = useState({});
  const [search, setSearch] = useState('');

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <div>
            <Search search={search} setSearch={setSearch}></Search>
            <CardList setCard={setCard}></CardList>
          </div>
        } />

        <Route path='/card' element={
          <div>
             <Search search={search}></Search>
             <CardDetals card={card}></CardDetals>
          </div>
        } />
     </Routes>
    </div>
  );
}

export default App;
