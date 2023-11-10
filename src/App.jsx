import { useState } from 'react';
import CountryList from './components/CountryList';
import SearchCountry from './components/SearchCountry';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CountriesPage from './pages/CountriesPage';
import Error404 from './pages/Error404';
import CountryInfoPage from './pages/CountryInfoPage';

function App() {

  return (
    <>
      <Header />

      <main className="container center-vertical">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries" element={<CountriesPage />} />
      
          <Route path="/countries/:countryName" element={<CountryInfoPage />} />


          <Route path="*" element={<Error404 />} />

        </Routes>
      </main>

    </>
  );
}

export default App;
