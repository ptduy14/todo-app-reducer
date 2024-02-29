const initialState = {
    jobs: [],
    inputJob: ''
}

const SET_JOB = 'set-job';
const ADD_JOB = 'add-job';
const DELETE_JOB = 'delete-job';
const SET_STATUS_JOB = 'set-status-job';

const COMPLETED = 1;
const UNCOMPLETED = 0;

export default initialState;
export {SET_JOB, ADD_JOB, DELETE_JOB, SET_STATUS_JOB, COMPLETED, UNCOMPLETED}