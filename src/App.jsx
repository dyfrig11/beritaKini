import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import DetailBerita from "./pages/DetailBerita";
import Terbaru from "./pages/Terbaru";
import Hiburan from "./pages/Hiburan";
import GayaHidup from "./pages/GayaHidup";
import Olahraga from "./pages/Olahraga";
import Nasional from "./pages/Nasional";
import Internasional from "./pages/Internasional";


function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailBerita />} />
        <Route path="/terbaru" element={<Terbaru />} />
        <Route path="/hiburan" element={<Hiburan />} />
        <Route path="/gaya-hidup" element={<GayaHidup />} />
        <Route path="/olahraga" element={<Olahraga />} />
        <Route path="/nasional" element={<Nasional />} />
        <Route path="/internasional" element={<Internasional />} />

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
