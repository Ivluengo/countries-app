import styled from 'styled-components';
import {FaPeopleGroup} from 'react-icons/fa6';
import { Link } from 'react-router-dom';


function CountryItem(props) {
    const {country} = props
    return (
        <StyledCountry>
            <Link to={`/countries/${country.name}`}>
                <h3>{country.name}</h3>
                <img src={country.flag} alt={`Bandera de ${country.name}`} />
                <h4><FaPeopleGroup /> {country.population}</h4>
            </Link>
        </StyledCountry>
    )
}

const StyledCountry = styled.article`
    background-color: #fff;
    padding: 0.5rem;

    a {
        color: black;
    }

    h3 {
        font-size: 1.2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export default CountryItem