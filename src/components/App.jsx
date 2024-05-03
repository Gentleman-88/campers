import Catalog from 'Pages/Catalog/Catalog';
import Favorites from 'Pages/Favorites/Favorites';
import HomePage from 'Pages/HomePage/HomePage';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
