import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getCountryByName from '../helpers/getCountryByName';
import CountryItem from '../components/CountryItem';

function CountryInfoPage() {
    const { countryName } = useParams();

    const [countries, setCountries] = useState([]);


    useEffect(() => {
      getCountryByName(countryName)
        .then((foundedCountries) => {
          setCountries(foundedCountries);
        });

    }, []);


    return (
        <>
            <h2>CountryInfo Page</h2>
            {
              countries.map(country => (
                <CountryItem key={country.id} country={country} />
              ))
            }
        </>
    )
}

export default CountryInfoPage;