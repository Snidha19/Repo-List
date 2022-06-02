import React, { useRef, useState } from "react";
import style from "./App.module.scss";
import axios from "axios";
import SearchBar from "./components/SearchBar/index.component";
import RepositoryList from "./components/RepositoryList/index.component";

function App() {
  const [repos, setRepos] = useState([]);

  // const inputRef = useRef(null);

  const getApiData = async (props) => {
    try {

      const response = await axios.get(
        `https://api.github.com/users/${props}/repos`
      );
      setRepos(response);
      
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={style.App}>
      <div className={style.App_header}>
        <p className={style.header_text}>List of Repositories</p>
      </div>

      <div className={style.search_bar_container}>
        <SearchBar onClickSearchButton={getApiData} />
      </div>

      <div className={style.repo_list_container}>
        {repos.length !== 0 ? (
          repos.data.map(item => (
            <React.Fragment key={item.id}>
              <RepositoryList repo={item} />
            </React.Fragment>
          ))
        ) : (
          <div> No repos found </div>
        )}
      </div>
    </div>
  );
}

export default App;
