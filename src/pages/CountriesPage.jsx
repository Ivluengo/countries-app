import { useState } from 'react';
import CountryList from '../components/CountryList';
import SearchCountry from '../components/SearchCountry';

function CountriesPage() {
  const [query, setQuery] = useState('');
    
    return (
        <>
            <SearchCountry setQuery={setQuery} />

            <CountryList query={query} />
        </>
    )
}

export default CountriesPage;