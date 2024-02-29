import { SET_JOB, ADD_JOB, DELETE_JOB, SET_STATUS_JOB } from "./constant"

const setJob = (payload) => {
    return {
        action: SET_JOB,
        payload
    }
}

const addJob = (payload) => {
    return {
        action: ADD_JOB,
        payload
    }
}

const deleteJob = (payload) => {
    return {
        action: DELETE_JOB,
        payload
    }
}

const setStatusJob = (payload) => {
    return {
        action: SET_STATUS_JOB, 
        payload
    }
}

export {setJob, addJob, deleteJob, setStatusJob}