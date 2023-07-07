import './App.scss';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
