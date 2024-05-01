import Catalog from 'Pages/Catalog/Catalog';
import Favorites from 'Pages/Favorites/Favorites';
import HomePage from 'Pages/HomePage/HomePage';
import { Navigate, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/catalog" element={<Catalog />}></Route>
      <Route path="/favorites" element={<Favorites />}></Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
