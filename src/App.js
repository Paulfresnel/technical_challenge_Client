import './App.css';
import Header from './components/Header.jsx/Header';
import {Routes, Route} from "react-router-dom"
import PhoneList from './pages/PhoneList/PhoneList';
import PhoneDetailPage from './pages/PhoneDetailPage/PhoneDetailPage';
import HomePage from './pages/HomePage/HomePage';


function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
    <Route path={"/phones"} element={<PhoneList/>}/>
    <Route path={"/"} element={<HomePage/>}/>
    <Route path={"/phones/:phoneId"} element={<PhoneDetailPage/>}/>

    </Routes>
      
    </div>
  );
}

export default App;
