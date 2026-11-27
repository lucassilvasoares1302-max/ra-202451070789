
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import UsinaDetalhes from './pages/UsinaDetalhes';
import NaoEncontrado from './pages/NaoEncontrado';

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/usina/:id"
          element={<UsinaDetalhes />}
        />

        <Route
          path="*"
          element={<NaoEncontrado />}
        />
      </Routes>

      <Footer />
    </>
  );
}
