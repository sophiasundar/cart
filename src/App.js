import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { allCards } from './components/allCards';
import CardList from './components/cardList';


function App() {
    const [cardList,setCardList] = useState(allCards)



  return (
    <div className="App">
        <Routes>
          <CardList/>
          <Route exact path='/' element={<CardList cardList={cardList}  setCardList={setCardList}/>}/>
           

        </Routes> 
    </div>
  );
}

export default App;
