import { setJob } from "./action";

function reducer(state, { action, payload }) {
  let newState;
  let newJobs;
  switch (action) {
    case "set-job":
      newState = {
        ...state,
        inputJob: payload,
      };
      return newState;
    case "add-job":
      newState = {
        ...state,
        jobs: [
          ...state.jobs,
          { id: payload.id, name: payload.inputJob, status: false },
        ],
      };
      return newState;

    case "delete-job":
      newJobs = state.jobs.filter((job) => {
        return job.id !== payload;
      });
      newState = {
        ...state,
        jobs: newJobs,
      };
      return newState;

    case "set-status-job":
      newJobs = state.jobs.map((job) => {
        if (job.id === payload) {
          return {
            ...job,
            status: !job.status
          }
        }

        return job;
      });
      console.log(newJobs);
      newState = {
        ...state,
        jobs: newJobs,
      };
      return newState;
    default:
      break;
  }
}

export default reducer;
