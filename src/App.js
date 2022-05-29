import './App.css';
import axios from 'axios';
import SearchBar from './components/SearchBar/index.component';
import { useState } from 'react';


function App() {
  const [repos, setRepos] = useState([]);

  const getApiData = async (props) => {
    const response = await axios.get(`https://api.github.com/users/${props}/repos`);
    setRepos(response.data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p className="header-text">
        List of Repositories
        </p>
      </header>
      <SearchBar onClickHandler={getApiData}/>
    </div>
  );
}

export default App;
