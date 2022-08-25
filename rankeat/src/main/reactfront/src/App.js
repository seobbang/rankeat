import './App.css';

import TopBar from './components/TopBar'
import DetailInfo from './pages/DetailInfo'
import WriteReview from './pages/WriteReview'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    
    <BrowserRouter>
        <div className='App'>

          <TopBar/>

          <div className='content'> 
      
              <Routes>
                <Route path='/' element={<DetailInfo/>}/>
                <Route  path='/WriteReview' element={<WriteReview />}/>
              </Routes>

          </div>  

        </div>

    </BrowserRouter>
  );
}

export default App;

