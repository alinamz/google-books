import '../index.css';
import Search from '../Search/Search';
import CardList from '../Components/CardList/CardList';
import { Router, Routes, Route, Redirect } from "react-router-dom";
import { ProtectedRoute } from '../Components/ProtectedRoute'
import { useState } from 'react';
import CardDetals from '../Components/CardDetals/CardDetals';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className="App">
      <Routes>
        <Route path='/books' element={
          <ProtectedRoute loggedIn={loggedIn} >
            <Search></Search>
            <CardList></CardList>
          </ProtectedRoute>
        } />

        <Route path='/books/v1/volumes/volumeId' element={
          <ProtectedRoute loggedIn={loggedIn} >
             <Search></Search>
             <CardDetals></CardDetals>
          </ProtectedRoute>
        } />
     </Routes>
    </div>
  );
}

export default App;
