import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import Header from "./component/header/Header";
import Navigation from "./component/navigation/Navigation";
import Home from "./component/home/Home";
import EncounterGenerator from "./component/generator/EncounterGenerator";
import MonsterLibrary from "./component/library/MonsterLibrary";
import MonsterConstructor from "./component/constructor/MonsterConstructor";
import MonsterPage from "./component/monster/MonsterPage";
import ErrorPage from "./component/ErrorPage/ErrorPage";


import './App.css';




function App() {
  return (
    <Router>
      <Header />
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/generator' element={<EncounterGenerator />} />
        <Route path='/library' element={<MonsterLibrary />} />
        <Route path='/constructor' element={<MonsterConstructor />} />
        <Route path='/monster/:monstername' element={<MonsterPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
