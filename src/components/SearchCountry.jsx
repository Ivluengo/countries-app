function SearchCountry(props) {
    const {setQuery} = props;
    // const [inputValue, setInputValue] = useState('');

    // useEffect(() => {
    //     setQuery(inputValue);
    // }, [inputValue]);   
   
    

    return (
        
        <input 
            type="text"         
            placeholder='Buscar país...'
            onChange={(e) => setQuery(e.target.value)}
        />
        
    )
}

export default SearchCountry;