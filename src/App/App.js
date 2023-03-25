import '../index.css';
import Search from '../Search/Search';
import CardList from '../Components/CardList/CardList';
import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from '../Components/ProtectedRoute'
import { useState } from 'react';
import CardDetals from '../Components/CardDetals/CardDetals';

function App() {
  const [loggedIn] = useState(true);

  const [card, setCard] = useState({});
  const [search, setSearch] = useState('');

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <ProtectedRoute loggedIn={loggedIn} >
            <Search search={search} setSearch={setSearch}></Search>
            <CardList setCard={setCard}></CardList>
          </ProtectedRoute>
        } />

        <Route path='/card' element={
          <ProtectedRoute loggedIn={loggedIn} >
             <Search search={search}></Search>
             <CardDetals card={card}></CardDetals>
          </ProtectedRoute>
        } />
     </Routes>
    </div>
  );
}

export default App;
