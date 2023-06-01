import './App.css';
import {useEffect} from 'react'; 
import { useSelector,useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import Header from  './components/Header';
import Preview from './components/Preview';
import Mapping from './components/Mapping';
import Upload from './components/Upload';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const dispatch=useDispatch();
  const currentPage=useSelector(state=>state.page.pn);

  useEffect(()=>{
    console.log(currentPage)
  },[currentPage])
  return (
    <BrowserRouter>
    <div className="App"> 
    <Navbar/>
    <div id='container'>
      <Header/>
      <Routes>
        <Route path='/' element={<Upload/>} />
        <Route path='/mapping' element={<Mapping />}/>
        <Route path='/Preview' element={<Preview />}/>
      </Routes>
      <Footer/>
    </div>

    </div>
  </BrowserRouter>
  );
}


export default App;
