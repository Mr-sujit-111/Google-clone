import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import ResultPage from './pages/ResultPage';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>
          <Homepage />
        </div>} />
        <Route path="/search" element={<ResultPage />} />
        <Route path="*" element={<h2 className="pageNotFound">404! Page not found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
