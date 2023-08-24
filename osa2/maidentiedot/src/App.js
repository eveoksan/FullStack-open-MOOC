import { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'
import Country from './components/Country'


const App = () => {
  const [filter1, setFilter1] = useState('');
  const [countries, setCountries] = useState([]);
  const [countriesToShow, setCountriesToShow] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      setCountries(response.data);
    });
  }, []);


  const handleSearch = (event) => {
    const search = event.target.value;
    setFilter1(search);
    setCountriesToShow(
      countries.filter((country) => country.name.common.toLowerCase().includes(search.toLowerCase())
      )
    );
  };


  return (
    <div>
      <div>
        Find countries <input value={filter1} onChange={handleSearch} />
      </div>
      {countriesToShow.length === 1 ? (
        <Country country={countriesToShow[0]} />
      ) : null}
      {countriesToShow.length > 10 ? (
        <div>Too many matches, specify another filter</div>
      ) : (
        <Countries
          countriesToShow={countriesToShow}
          setCountriesToShow={setCountriesToShow}
        />
      )}
    </div>
  );
}

export default App;