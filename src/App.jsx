
import { Routes, Route, useLocation } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Home from './Pages/Home/Home.jsx'
import Catalogo from './Pages/Catalogo/Catalogo.jsx'
import Login from './Pages/Login/Login.jsx'
import NotFound from './Pages/NotFound/NotFound.jsx'
import Sobre from './Pages/Sobre/Sobre.jsx'
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.jsx";
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const location = useLocation();

  return (
    <div>
    <ErrorBoundary>
      {location.pathname !== '/login' && <NavBar />}
      <main id="main" style={{ minHeight: '70vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {location.pathname !== '/login' && <Footer />}
    </ErrorBoundary>
    </div>
  );
}

export default App;
