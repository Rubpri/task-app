import axios from 'axios';

const taskApi = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

export const getAllTasks = () => {
    return taskApi.get('/');
}

export const getTask = (id) => {
    return taskApi.get('/' + id + '/');
}

export const createTask = (task) => {
    return taskApi.post('/', task);
}

export const deleteTask = (id) => {
    return taskApi.delete(`/${id}`);
}

export const updateTask = (id, task) => {
    return taskApi.put('/' + id + '/', task)
}