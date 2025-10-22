
import { Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Home from './Pages/Home.jsx'
import Catalogo from './Pages/Catalogo'
import Login from './Pages/Login'
import NotFound from './Pages/NotFound'
import Sobre from './Pages/Sobre'

function App() {
  return (
    <>
      <NavBar />
      <main id="main" style={{ minHeight: '70vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
