import { useState, useEffect } from 'react';
import styled from 'styled-components';
import CountryItem from './CountryItem';
import getCountriesAsyncAwait from '../helpers/getCountries';

function CountryList(props) { 
    const { query } = props;
    const [countries, setCountries] = useState([]);


    const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(query.toLowerCase()));

    useEffect(() => {
       
        getCountriesAsyncAwait()
            .then(countries => setCountries(countries))       
        
    }, [])


    // useEffect(() => {
    //     setCountries(countries.filter(country => country.name.includes(query)) )
    // }, [query])
    
    return (
        <ListWrapper>
            {
                filteredCountries.map(country => (
                    <CountryItem key={country.id} country={country} />
                ))
            }
        </ListWrapper>
    )
}

const ListWrapper = styled.section`
    border: 2px solid black;
    width: 100%;
    padding: 1rem;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
`;

export default CountryList;