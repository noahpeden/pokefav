import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Header from './components/Header';
import Details from './pages/Details';
import Featured from './components/Featured';
import FavoritesContextProvider from './contexts/FavoritesContext';

function App() {
  return (
    <BrowserRouter>
      <FavoritesContextProvider>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/details/:name" element={<Details />} />
            <Route path="/all" element={<Featured />} />
          </Routes>
        </div>
      </FavoritesContextProvider>
    </BrowserRouter>
  );
}

export default App;
