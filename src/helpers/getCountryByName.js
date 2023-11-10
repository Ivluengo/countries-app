async function getCountryByName(countryName) {
    try {
        const resp = await fetch(`https://restcountries.com/v3.1/translation/${countryName}`);

        const countries = await resp.json();
        console.log(countries);
        const mappedCountries = countries.map(country => {
    
            return {
                id: country.cca2,
                name: country.translations.spa.common,
                flag: country.flags.svg,
                population: country.population
            }
        });
    
        return mappedCountries;
    } catch (error) {
        console.error(error);
    }
}

export default getCountryByName;