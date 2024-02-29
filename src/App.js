import { useRef } from "react";
import "./App.css";
import { addJob, setJob, deleteJob, setStatusJob } from "./store/action";
import useProvider from "./store/hooks/useProvider";

function App() {
  const inputRef = useRef();

  const { state, dispatch } = useProvider();
  const { jobs, inputJob } = state;

  const handleAddJob = () => {
    if (inputJob === "") {
      alert("please enter your job");
    } else {
      let id = jobs.length === 0 ? 0 : jobs[jobs.length - 1].id + 1;
      dispatch(addJob({ id, inputJob }));
      dispatch(setJob(""));

      inputRef.current.focus();
    }
  };

  const handleDeleteJob = (id) => {
    dispatch(deleteJob(id));
  };

  const handleSetStatusJob = (id) => {
    dispatch(setStatusJob(id));
  };

  return (
    <div className="container">
      <div className="todo-app">
        <div className="app-title">
          <h2>To-do app</h2>
          <i className="fa-solid fa-book-bookmark"></i>
        </div>
        <div className="row">
          <input
            type="text"
            id="input-box"
            placeholder="add your tasks"
            ref={inputRef}
            value={inputJob}
            onChange={(e) => dispatch(setJob(e.target.value))}
          ></input>
          <button onClick={handleAddJob}>Add</button>
        </div>
        <ul id="list-container">
          {jobs.map((job) => (
            <li
              className={job.status === true && "checked"}
              key={job.id}
              onClick={() => handleSetStatusJob(job.id)}
            >
              {job.name}
              {job.status === true && (
                <span onClick={() => handleDeleteJob(job.id)}>X</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
