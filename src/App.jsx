
import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home.jsx'
import Catalogo from './Pages/Catalogo'
import Login from './Pages/Login'
import NotFound from './Pages/NotFound'
import Sobre from './Pages/Sobre'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
