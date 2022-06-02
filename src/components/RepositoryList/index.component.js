import React from "react";
import style from "./index.module.scss";
import { BiGitRepoForked } from "react-icons/bi";

const RepositoryList = ({ repo, ...props }) => {
  return (
    <div className={style.repo_list_item}>
      {console.log(repo)}
      <div className={style.repo_title_container}>
        <a
          href={repo.html_url}
          className={style.repo_link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {repo.name}
        </a>
        {repo.description && (
          <div className={style.repo_description}>{repo.description}</div>
        )}
        <div className={style.repo_update}> Updated on {repo.pushed_at} </div>
      </div>

      <div className={style.repo_info_container}>
        <div className={style.repo_language}>{repo.language}</div>

        <div>
          {repo.forks_count > 0 ? (
            <div className={style.repo_fork}>
              <BiGitRepoForked />
              <span> {repo.forks_count} </span>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default RepositoryList;
