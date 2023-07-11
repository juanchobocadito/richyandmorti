import imageRickMorty from "./img/rick-morty.jpeg";
import "./App.css";
import { useState } from "react";
import Characters from "./components/Characters";



function App() {
  const [character, setcharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    // const api2 = await fetch('https://rickandmortyapi.com/api/location');
    // const api3 = await fetch('https://rickandmortyapi.com/api/episode');
    const characterApi = await api.json();
    // const locationApi = await api2.json();
    // const episodioApi = await api3.json();
    //console.log(characterApi);
    setcharacters(characterApi.results);
    // setLocation(locationApi.results);
    // setEpisodio(episodioApi.results);
  };

  console.log(character);

  return (
    <>
      <div>
        <h1 className='title'>Rick and Morty</h1>
        {character ? (
          <Characters characters={character} />
        ) : (
          <>
            <img src={imageRickMorty} alt="imge rick & morty" />
            <button onClick={reqApi} className='btn-search'>Buscar</button>
          </>
        )}
      </div>
    </>
  );
}

export default App;


 