import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import Header from "./component/Header";
import Navigation from "./component/Navigation";
import Home from "./component/Home";
import EncounterGenerator from "./component/EncounterGenerator";
import MonsterLibrary from "./component/MonsterLibrary";
import MonsterConstructor from "./component/MonsterConstructor";
import MonsterPage from "./component/MonsterPage";
import ErrorPage from "./component/ErrorPage";
import Footer from "./component/Footer";

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
        {/*<Footer />*/}
    </Router>
  );
}

export default App;
